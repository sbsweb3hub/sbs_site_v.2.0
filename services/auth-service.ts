/** @format */

'use server';
//sever-only
import {
  AuthCredentialsType,
  AuthRolesEnum,
  AuthSessionType,
} from './../types/index';

import dbConnect from '@/db/dbConnect';
import { User } from '@/db/models';
import { ethers } from 'ethers';
import { JWTPayload, SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';

//@todo put secret into secret
const secretKey = 'fuckingDinosaurs';
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: JWTPayload): Promise<string> {
  'use server';
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    // .setIssuedAt()
    // .setExpirationTime('10 sec from now')
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  'use server';
  const { payload } = await jwtVerify(input, key, {
    algorithms: ['HS256'],
  });
  return payload;
}

export async function getNonce(
  address: string
): Promise<Record<string, string>> {
  'use server';
  try {
    await dbConnect();
    const existedUser = await User.findOne({
      address,
    });
    if (!existedUser) {
      const nonce = await generateRandomString();
      const newUser = await User.create({ address, nonce });
      if (!newUser) {
        throw new Error('Failed to create new user');
      }
      return { nonce: newUser.nonce };
    }
    return { nonce: existedUser.nonce };
  } catch (error) {
    console.log(error);
    throw new Error('Failed to get nonce');
  }
}

async function generateRandomString(size = 16) {
  'use server';
  const randomBytes = ethers.randomBytes(size);
  const randomString = ethers.hexlify(randomBytes);
  return randomString.substring(2);
}

async function validateSignature({
  address,
  signature,
  message,
}: AuthCredentialsType & {
  message: string;
}): Promise<boolean> {
  'use server';
  try {
    const recoveredAddress = ethers.verifyMessage(message, signature);
    return recoveredAddress.toLowerCase() === address.toLowerCase();
  } catch (error) {
    console.log(error);
    throw new Error('Failed to verify signature');
  }
}

export async function login({
  address,
  signature,
}: AuthCredentialsType): Promise<void> {
  'use server';
  try {
    await dbConnect();

    const user = await User.findOne({ address });
    if (!user) {
      throw new Error('User not found');
    }
    const message = `Welcome to Blast!\n\nThis request will not trigger a blockchain transaction or cost any gas fees.\n\nWallet address:\n${address.toLowerCase()}\n\nNonce:\n${
      user.nonce
    }`;
    const isSignatureValid = await validateSignature({
      address,
      signature,
      message,
    });
    if (!isSignatureValid) throw new Error('Invalid credentials');

    user.nonce = await generateRandomString();
    await user.save();
    const payload = { address, sub: user.id, role: user.role };
    const token = await encrypt(payload);
    cookies().set('session', token, { httpOnly: true, secure: true });
  } catch (error) {
    console.log(error);
    throw new Error('Failed to login!');
  }
}

export async function logout() {
  'use server';
  try {
    cookies().delete('session');
  } catch (error) {
    console.log(error);
    throw new Error('Failed to logout');
  }
}

export async function getSession() {
  'use server';
  try {
    const session = cookies().get('session')?.value;
    if (!session) return null;
    //@todo find user in DB and return OR refresh token?
    const res = await decrypt(session);
    return res;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to get session');
  }
}

export async function changeRole(
  session: AuthSessionType,
  role: AuthRolesEnum
) {
  'use server';
  try {
    const updatedUser = await User.findByIdAndUpdate(session.sub, { role });
    if (!updatedUser) {
      throw new Error('Changing role failed');
    }
    const payload = { ...session, role };
    const token = await encrypt(payload);
    cookies().set('session', token, { httpOnly: true, secure: true });
  } catch (error) {
    console.log(error);
    throw new Error('Failed to change role');
  }
}
