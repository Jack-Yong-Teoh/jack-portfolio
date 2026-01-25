import { type NextRequest, NextResponse } from "next/server";

const SUPPORTED_LANGS = ["en", "zh", "fr", "ja", "es"];
const DEFAULT_LANG = "en";

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const parts = pathname.split("/").filter(Boolean);
  const last = parts[parts.length - 1];

  // If URL already ends with a supported lang
  if (SUPPORTED_LANGS.includes(last)) {
    const withoutLang = "/" + parts.slice(0, -1).join("/");
    const res = NextResponse.rewrite(new URL(withoutLang || "/", req.url));
    res.cookies.set("NEXT_LOCALE", last);
    return res;
  }

  // If no lang suffix → redirect with cookie lang or default
  const cookieLocale = req.cookies.get("NEXT_LOCALE")?.value;
  const langToUse = SUPPORTED_LANGS.includes(cookieLocale || "")
    ? cookieLocale!
    : DEFAULT_LANG;

  const url = req.nextUrl.clone();
  url.pathname = `${pathname.replace(/\/$/, "")}/${langToUse}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
