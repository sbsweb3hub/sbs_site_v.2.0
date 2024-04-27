/** @format */
import { cookies } from 'next/headers';
import { encrypt } from '@/auth/lib';

export async function POST(request: Request) {
  const req = await request.json();
  const session = await encrypt({ req });
  cookies().set('session', session, { httpOnly: true, secure: true });

  return Response.json({ message: session });
}
