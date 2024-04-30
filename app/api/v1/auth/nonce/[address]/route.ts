/** @format */

import { getNonce } from '@/services/auth-service';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  req: NextRequest,
  { params }: { params: { address: string } }
) {
  const nonce = await getNonce(params.address);
  return NextResponse.json(nonce);
}
