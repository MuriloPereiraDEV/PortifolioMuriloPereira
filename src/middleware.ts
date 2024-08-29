import createMiddleware from "next-intl/middleware";
import { locales } from "./config";

export default createMiddleware({
  locales,
  defaultLocale: "pt-br",
});

export const config = {
  matcher: ["/", "/(pt-br|en)/:path*"],
};
