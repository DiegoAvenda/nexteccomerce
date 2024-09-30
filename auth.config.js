import { PrismaAdapter } from "@auth/prisma-adapter"
import { db } from "/prisma/prisma"
import Google from "next-auth/providers/google"

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user
      const isOnDashboard = nextUrl.pathname.startsWith("/profile")
      if (isOnDashboard) {
        if (isLoggedIn) return true
        return false // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/profile", nextUrl))
      }
      return true
    },
  },
  adapter: PrismaAdapter(db),
  providers: [Google],
}
