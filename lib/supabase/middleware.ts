import { NextResponse, type NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const isAppRoute =
    request.nextUrl.pathname.startsWith('/dashboard') ||
    request.nextUrl.pathname.startsWith('/journal') ||
    request.nextUrl.pathname.startsWith('/plan') ||
    request.nextUrl.pathname.startsWith('/guardrails') ||
    request.nextUrl.pathname.startsWith('/analytics') ||
    request.nextUrl.pathname.startsWith('/settings');

  if (isAppRoute) {
    const hasSession = request.cookies.get('sb-access-token');

    if (!hasSession) {
      const url = request.nextUrl.clone();
      url.pathname = '/login';
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/journal/:path*', '/plan/:path*', '/guardrails/:path*', '/analytics/:path*', '/settings/:path*'],
};
