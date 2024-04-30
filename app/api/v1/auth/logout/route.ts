/** @format */
import { cookies } from 'next/headers';

export async function GET() {
  cookies().delete('session');
  return Response.json({ message: 'Logout is ok!' });
}
