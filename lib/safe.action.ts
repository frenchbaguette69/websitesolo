import { getServerSession } from "next-auth";
import { createSafeActionClient, DEFAULT_SERVER_ERROR_MESSAGE } from "next-safe-action";

export class ActionError extends Error {};

export const actionClient = createSafeActionClient({
    handleServerError: (e) => {
        console.error("Action error: ", e.message);

        if (e instanceof ActionError) {
            return e.message;
        }

        return DEFAULT_SERVER_ERROR_MESSAGE;
    }
}).use(async ({ next, clientInput, metadata }) => {
    console.log("LOGGING MIDDLEWARE");

    const startTime = performance.now();

    const result = await next();

    const endTime = performance.now();

    console.log("Result ->", result);
    console.log("Client input ->", clientInput);
    console.log("Metadata ->", metadata);
    console.log("Action execution took", endTime - startTime, "ms");

    return result;
}).use(async ({ next }) => {

    //pass generic context 

    return next({ ctx: { x: 0 } })
});

export const adminActionClient = actionClient.use(async ({ next }) => {

    const session = await getServerSession();

    if (!session?.user.isAdmin) {
        throw new ActionError("You are not authorized to perform this action");

    }

    return next({ ctx: { user: session.user } });
})