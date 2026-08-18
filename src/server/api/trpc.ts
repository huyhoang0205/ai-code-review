import { initTRPC } from "@trpc/server";
import superjson from "superjson";
import { ZodError, flattenError } from "zod";
import { db } from "../db";

export const createTRPCContext = async (otps: { headers: Headers }) => {
  return {
    db,
    header: otps.headers,
  };
};

const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.cause instanceof ZodError ? flattenError(error.cause) : null,
      },
    };
  },
});

export const createCallerFactory = t.createCallerFactory;
export const createTRPCRouter = t.router;
export const publicProcedure = t.procedure;
