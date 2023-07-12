import { authMiddleware } from "@clerk/nextjs"
import { redirectToSignUp } from "@clerk/nextjs"

export default authMiddleware({
  afterAuth: (auth, req, evt) => {
    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignUp({returnBackUrl: req.url}) 
    } 
    
  },
  publicRoutes: [
    "/",
    "/products",
    "/male",
    "/female",
    "/kids",
    "/products/:id",
    "/cart",
    "/api/checkout",
    "/api/webhook"
  ],
})

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)",  "/(api|trpc)(.*)"],
  // matcher: ["/cart"]
}
