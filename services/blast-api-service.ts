/** @format */

import { ethers } from 'ethers';

const fetchChallenge = async () => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contractAddress: process.env.CONTRACT,
      operatorAddress: process.env.OPERATOR_ADDRESS,
    }),
  };
  try {
    const res = await fetch(
      'https://waitlist-api.develop.testblast.io/v1/dapp-auth/challenge',
      options
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch challenge!');
  }
};

const generateSignature = async (msg: string) => {
  try {
    const wallet = new ethers.Wallet(process.env.OPERATOR_KEY!);
    const signature = await wallet.signMessage(ethers.toUtf8Bytes(msg));
    return signature;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to sign msg!');
  }
};

const getToken = async (challengeData: string, signature: string) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      challengeData,
      signature,
    }),
  };
  try {
    const res = await fetch(
      'https://waitlist-api.develop.testblast.io/v1/dapp-auth/solve',
      options
    );
    const token = await res.json();
    return token;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to get token!');
  }
};

export const getPoints = async (token: string) => {
  const options = {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
    next: { revalidate: 60 },
  };
  try {
    const res = await fetch(
      `https://waitlist-api.develop.testblast.io/v1/contracts/${process.env.CONTRACT}/point-balances`,
      options
    );
    const points = await res.json();
    console.log(points);
    return points;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to get points!');
  }
};

export const getDataFromBlastApi = async () => {
  try {
    const { challengeData, message } = await fetchChallenge();
    const signature = await generateSignature(message);
    const { bearerToken: token } = await getToken(challengeData, signature);
    const points = await getPoints(token);
    return points;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to get data from Blast API!');
  }
};
