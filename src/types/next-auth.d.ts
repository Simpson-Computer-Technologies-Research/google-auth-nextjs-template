import "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface User {
    id: string | null;
    secret: string | null;
    name: string | null;
    email: string | null;
    image: string | null;
  }

  interface Session {
    user: User;
  }
}
