import { createCallerFactory, createTRPCRouter, publicProcedure } from "./trpc";

export const appRouter = createTRPCRouter({
    health: publicProcedure.query(() => {
        return {status: "ok", times: Date.now()}
    })
})

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);
