/** @format */

import { NextRequest, NextResponse } from 'next/server';

import { getSession } from './services/auth-service';
import { AuthRolesEnum, AuthRoutes } from './types';

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const session = await getSession();
  console.log('Session middleware', session);
  switch (path) {
    case AuthRoutes.FOUNDER:
      if (!session) return NextResponse.redirect(new URL('/app', req.nextUrl));
      break;
    case AuthRoutes.FOUNDER_CREATE:
      if (!session || session.role === AuthRolesEnum.FOUNDER)
        return NextResponse.redirect(new URL('/app', req.nextUrl));
      break;
    case AuthRoutes.FOUNDER_PATCH:
      if (!session || session.role !== AuthRolesEnum.FOUNDER)
        return NextResponse.redirect(new URL('/app', req.nextUrl));
      break;
    case AuthRoutes.ADMIN:
      if (!session || session.role !== AuthRolesEnum.ADMIN)
        return NextResponse.redirect(new URL('/app', req.nextUrl));
      break;
    default:
      return NextResponse.next();
  }
}

// Routes Middleware should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
  unstable_allowDynamic: ['/node_modules/mongoose/dist/browser.umd.js'],
};
