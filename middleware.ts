/** @format */

import { NextRequest, NextResponse } from 'next/server';

import { getSession } from './services/auth-service';

const protectedRoutes = ['/app/founder'];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const session = await getSession();
  if (isProtectedRoute && !session) {
    return NextResponse.redirect(new URL('/', req.nextUrl));
  }
  return NextResponse.next();
}
// Routes Middleware should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
  unstable_allowDynamic: ['/node_modules/mongoose/dist/browser.umd.js'],
};
