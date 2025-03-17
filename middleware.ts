import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  console.log(`🌍 Middleware Triggered - Pathname: ${req.nextUrl.pathname}`);

  // ロケールによるリダイレクトを削除し、何も変更しない
  return NextResponse.next();
}

// middleware を適用するパスを指定
export const config = {
  matcher: ['/((?!_next|api|static|favicon.ico).*)'],
};