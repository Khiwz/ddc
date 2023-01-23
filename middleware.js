import { NextResponse } from "next/dist/server/web/spec-extension/response";

export default function middleware(request) {
  // console.log("middleware", request.cookies.get("loggedIn"));
  // console.log("middleware", request.url);
  const loginURL = process.env.NEXT_PUBLIC_SITE_URL + "/login";
  const verify = request.cookies.get("loggedIn");
  const url = request.url;

  if (!verify && url.includes("/dashboard")) {
    return NextResponse.redirect(loginURL);
  }
  if (verify && url === loginURL) {
    return NextResponse.redirect(
      process.env.NEXT_PUBLIC_SITE_URL + "/backend/dashboard"
    );
  }
}
