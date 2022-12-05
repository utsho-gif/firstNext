import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID || '',
      clientSecret: process.env.GITHUB_SECRET || '',
    }),
  ],
  // database: process.env.DB_URL,
  // session: {
  //   jwt: true,
  // },
  // jwt: {
  //   secret:
  //     '3e0311985fb1a3b43aaf76050fc10006f7da7a3cb71f268fc299f314cdf95e1f0d39d1b21c48e654eeac20388bb38532eb7fcba736a317372183de19c919ebb3',
  // },
  // callbacks: {
  //   async jwt(token: any, user: any) {
  //     if (user) {
  //       token.id = user.id;
  //     }
  //     return token;
  //   },
  //   async session(session: any, token: any) {
  //     session.user.id = token.id;
  //     return session;
  //   },
  // },
});
