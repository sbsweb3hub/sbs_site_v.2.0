/** @format */

import { NextRequest, NextResponse } from 'next/server';

const protectedRoutes = ['/private', '/private/create'];
//@todo this is bull shit
export default function middleware(req: NextRequest) {
  // let token = req.cookies.get('token');
  const resp = req.cookies.get('wagmi.store')?.value;
  const isConnected = JSON.parse(resp!);
  if (!isConnected && protectedRoutes.includes(req.nextUrl.pathname)) {
    const newUrl = new URL('/', req.nextUrl.origin);
    return NextResponse.redirect(newUrl.toString());
  }
}
