import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest /* response: NextResponse */) {
  const response = NextResponse.next();
  const themePreference = request.cookies.get("theme");
  if (!themePreference) {
    response.cookies.set("theme", "dark");
  }

  // custom headers
  response.headers.set("Custom-header", "custom-value");

  return response;

  //   return NextResponse.redirect(new URL("/", request.url));

  /*
    // Conditional sttaements
    if (request.nextUrl.pathname === "/profile") {
        return NextResponse.redirect(new URL("/hello", request.nextUrl));
    }
  */
}

// export const config = {
//   matcher: "/profile",
// };
