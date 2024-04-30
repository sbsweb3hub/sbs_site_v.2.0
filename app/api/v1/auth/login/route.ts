/** @format */

import { login } from '@/services/auth-service';
import { cookies } from 'next/headers';

export async function POST(req: Request) {
  try {
    const credentials = await req.json();
    const token = await login(credentials);
    if (!token) throw new Error('Login failed');
    cookies().set('session', token, { httpOnly: true, secure: true });

    return Response.json({ message: 'User is logged in!' });
  } catch (error) {
    console.log(error);
    return Response.json({ error: 'Authentication failed' });
  }
}
