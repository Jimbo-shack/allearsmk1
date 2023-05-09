import { clerkClient } from "@clerk/nextjs/server";
import type { User } from "@clerk/nextjs/dist/api";
import { z } from "zod";

import {
  createTRPCRouter,
  privateProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { TRPCError } from "@trpc/server";

const filterUserForClient = (user: User) => {
  return { id: user.id, username: user.username };
};

export const submissionRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const submission = await ctx.prisma.submission.findMany({
      take: 400,
    });

    const users = (
      await clerkClient.users.getUserList({
        userId: submission.map((submission) => submission.autherId),
        limit: 400,
      })
    ).map(filterUserForClient);

    return submission.map((submission) => {
      const auther = users.find((user) => user.id === submission.autherId);

      if (!auther)
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Auther not found",
        });

      return {
        submission,
        auther: {
          ...auther,
          username: auther.username,
        },
      };
    });
  }),

  create: privateProcedure
    .input(
      z.object({
        content: z.string().min(1).max(400),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const autherId = ctx.userId;

      const submission = await ctx.prisma.submission.create({
        data: {
          autherId,
          content: input.content,
          source: "web",
        },
      });

      return submission;
    }),
});
