/** @format */

import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  console.log(searchParams.get('search'));
  return NextResponse.json({ msg: 'Hello World' });
}
