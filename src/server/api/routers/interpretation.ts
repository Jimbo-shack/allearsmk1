import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const interpretationRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    return ctx.prisma.interpretation.findMany();
  }),
});
