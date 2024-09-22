import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";

export const authOptions: NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {},
            async authorize(cred: any) {
                const client = new PrismaClient();

                const user = await client.user.findUnique({
                    where: {
                        email: cred.email
                    }
                });

                if (!user) {
                    return null;
                }

                if (bcrypt.compareSync(cred.password, user.password)) {
                    return {
                        id: user.id.toString(),
                        email: user.email,
                        password: user.password,
                        isAdmin: user.isAdmin,
                        createdAt: user.createdAt,
                        updatedAt: user.updatedAt
                    };
                }

                return null;
            }
        })
    ],
    callbacks: {
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

export async function GET(request: Request) {
    return NextAuth(authOptions)(request);
}

export async function POST(request: Request) {
    return NextAuth(authOptions)(request);
}