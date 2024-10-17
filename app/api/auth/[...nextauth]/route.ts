import NextAuth, { NextAuthOptions } from "next-auth";
import { registerUser } from "../../actions/user/post.action";
import GoogleProvider from "next-auth/providers/google";

const authOptions: NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
        })
    ],
    callbacks: {
        async signIn({ user, account }) {
            if (
                (
                    account?.provider === "google")
            ) {
                if (!user.email || !user.name) return false;
                const registerData = await registerUser({
                    email: user.email,
                    name: user.name
                });
                if (registerData?.data) return true;
                else return false;
            }
            return true;
        },
        jwt: async ({ token, user }) => {
            const isSignedIn = !!user;

            if (isSignedIn) {
                token.id = user.id;
                token.email = user.email;
                token.isAdmin = (user as any).isAdmin;
            }

            return Promise.resolve(token);
        },
        async session({ session, token }) {
            session.user.isAdmin = (token as any).isAdmin;

            return session;
        }
    }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }
