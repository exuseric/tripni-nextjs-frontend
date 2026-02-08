import { auth } from "@/lib/auth/server";
import { NextResponse, NextRequest } from "next/server";

export default async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Define public routes (no auth required)
  const publicRoutes = ["/", "/auth/sign-in", "/auth/sign-up", "/about", "/contact"];

  const isPublicRoute = publicRoutes.includes(pathname) || pathname.startsWith("/api/public");

  if (isPublicRoute) {
    return NextResponse.next();
  }

  // Protect all other routes
  return auth.middleware({
    loginUrl: "/auth/sign-in",
  })(request);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
