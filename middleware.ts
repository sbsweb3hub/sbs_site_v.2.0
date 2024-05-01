/** @format */

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { decrypt, getSession } from './services/auth-service';
import { cookies } from 'next/headers';

export async function middleware(request: NextRequest) {
  // if (request.nextUrl.pathname.startsWith('/app/founder')) {
  //   const resp = cookies().get('session')?.value;
  //   console.log('middle', resp);
  //   // let session = null;
  //   // if (resp) {
  //   //   session = await decrypt(resp);
  //   //   console.log('session', session);
  //   // }
  //   // if (!resp) return NextResponse.redirect(new URL('/', request.url));
  //   // return NextResponse.rewrite(new URL('/app', request.url));
  // }
}
