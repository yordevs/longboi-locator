import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider, { GoogleProfile } from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID ?? "",
      clientSecret: process.env.GOOGLE_SECRET ?? "",
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token, user }) {
      session.user = { ...token, ...user };
      return session;
    },
    async signIn({ account, profile }) {
      if (account?.provider === "google") {
        const userProfile = profile as GoogleProfile;
        if (!userProfile?.email.endsWith("@york.ac.uk")) {
          return "/not-york-email";
        }
      }
      return true; // Do different verification for other providers that don't have `email_verified`
    },
  },
  session: {
    strategy: "jwt",
  },
  //attach mongoose to the session
  adapter: MongoDBAdapter(clientPromise),
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
