/** @format */

import { IAuthCredentials } from './../types/index';
/** @format */

import dbConnect from '@/db/dbConnect';
import { User } from '@/db/models';
import { ethers } from 'ethers';
import { JWTPayload, SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';

//@todo put secret into secret
const secretKey = 'fuckingDinosaurs';
const key = new TextEncoder().encode(secretKey);

async function encrypt(payload: JWTPayload): Promise<string> {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    // .setIssuedAt()
    // .setExpirationTime('10 sec from now')
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ['HS256'],
  });
  return payload;
}

export async function getNonce(
  address: string
): Promise<Record<string, string>> {
  try {
    await dbConnect();
    const existedUser = await User.findOne({
      address,
    });
    if (!existedUser) {
      const nonce = generateRandomString();
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

function generateRandomString(size = 16) {
  const randomBytes = ethers.randomBytes(size);
  const randomString = ethers.hexlify(randomBytes);
  return randomString.substring(2);
}

function validateSignature({
  address,
  signature,
  message,
}: IAuthCredentials & {
  message: string;
}): boolean {
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
}: IAuthCredentials): Promise<string> {
  try {
    await dbConnect();

    const user = await User.findOne({ address });
    if (!user) {
      throw new Error('User not found');
    }
    const message = `Welcome to Blast!\n\nThis request will not trigger a blockchain transaction or cost any gas fees.\n\nWallet address:\n${address.toLowerCase()}\n\nNonce:\n${
      user.nonce
    }`;
    const isSignatureValid = validateSignature({
      address,
      signature,
      message,
    });
    if (!isSignatureValid) throw new Error('Invalid credentials');

    user.nonce = generateRandomString();
    await user.save();
    const payload = { address, sub: user.id };
    return await encrypt(payload);
  } catch (error) {
    console.log(error);
    throw new Error('Authentication failed!');
  }
}

export async function getSession() {
  try {
    const session = cookies().get('session')?.value;
    if (!session) return null;
    //@todo find user in DB and return OR refresh token?
    return await decrypt(session);
  } catch (error) {
    console.log(error);
    throw new Error('Failed to get session');
  }
}
