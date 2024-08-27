import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "pt-br"],

  // Used when no locale matches
  defaultLocale: "pt-br",
});

export const config = {
  matcher: ["/", "/(pt-br|en)/:path*"],
};
