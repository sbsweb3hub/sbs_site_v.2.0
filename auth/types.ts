/** @format */

export interface INonce {
  nonce: number;
}
export interface ILogin {
  message: string;
}

export interface ISession {
  _id: string;
  address: string;
  achievements: unknown[];
  nonce: number;
  name: string;
  avatar: string;
  endedPuzzleCount: string;
  isAdmin?: boolean;
}
