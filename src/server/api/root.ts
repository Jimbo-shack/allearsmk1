import { createTRPCRouter } from "~/server/api/trpc";
import { submissionRouter } from "./routers/submissions";
import { interpretationRouter } from "./routers/interpretation";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  submission: submissionRouter,
  interpretation: interpretationRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
