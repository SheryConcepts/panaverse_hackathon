import { authMiddleware } from "@clerk/nextjs"

export default authMiddleware({
  publicRoutes: [
    "/",
    "/products",
    "/male",
    "/female",
    "/kids",
    "/products/:id",
    "/cart",
    "/api/checkout"
  ],
})

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)",  "/(api|trpc)(.*)"],
  // matcher: ["/cart"]
}
