/** @format */

import { NextRequest, NextResponse } from 'next/server';
import { getSession } from './auth/lib';

//@todo - check expires and url path when redirect
export default async function middleware(req: NextRequest) {
  const session = await getSession();
  if (session) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL('/', req.url));
}

export const config = {
  matcher: '/private/:path*',
};
