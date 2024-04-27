/** @format */
import { cookies } from 'next/headers';
// import { encrypt } from '@/auth/lib';

export async function GET(request: Request) {
  // const req = await request.json();
  // const session = await encrypt({ req });

  cookies().delete('session');

  return Response.json({ message: 'Logout is ok!' });
}
