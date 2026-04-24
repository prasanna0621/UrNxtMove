import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const session = request.cookies.get('auth-session');
  const { pathname } = request.nextUrl;

  // Protected routes
  const protectedPaths = ['/home', '/colleges', '/quiz', '/stream', '/profile'];
  
  const isProtected = protectedPaths.some(path => pathname.startsWith(path));

  if (isProtected && !session) {
    const url = new URL('/login', request.url);
    url.searchParams.set('callbackUrl', pathname);
    return NextResponse.redirect(url);
  }

  // Redirect to home if logged in and trying to access landing/auth pages
  const authPaths = ['/login', '/signup'];
  if (authPaths.includes(pathname) && session) {
    return NextResponse.redirect(new URL('/home', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/home/:path*',
    '/colleges/:path*',
    '/quiz/:path*',
    '/stream/:path*',
    '/profile/:path*',
    '/login',
    '/signup',
  ],
};
