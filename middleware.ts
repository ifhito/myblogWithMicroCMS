import { NextRequest, NextResponse } from 'next/server';

const locales = ['en', 'ja'];
const defaultLocale = 'en';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // すでにロケールが含まれている場合はそのまま
  if (locales.some((locale) => pathname.startsWith(`/${locale}/`))) {
    return NextResponse.next();
  }

  // ブラウザの言語設定を取得
  const acceptLanguage = req.headers.get('accept-language');
  const userLocale = acceptLanguage?.split(',')[0].split('-')[0] || defaultLocale;

  // 適切なロケールを適用
  const locale = locales.includes(userLocale) ? userLocale : defaultLocale;
  const url = new URL(`/${locale}${pathname}`, req.nextUrl.origin);

  return NextResponse.redirect(url);
}

// middleware を適用するパスを指定
export const config = {
  matcher: ['/((?!_next|api|static|favicon.ico).*)'],
};