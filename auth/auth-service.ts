/** @format */

import { apiInstance } from '@/api/api-instance';
import { AxiosResponse } from 'axios';
import { ILogin, INonce, ISession } from './types';

//@todo refactor to next fetch
export default class AuthService {
  static async getNonce(address: string): Promise<number | undefined> {
    try {
      const response: AxiosResponse<INonce> = await apiInstance.get(
        `/auth/nonce/${address}`
      );
      return response.data.nonce;
    } catch (error) {
      return undefined;
    }
  }
  static async sendSign(
    address: string,
    signature: string
  ): Promise<ILogin | undefined> {
    try {
      const response: AxiosResponse<ILogin> = await apiInstance.post(
        `/auth/login`,
        { address, signature }
      );
      return response.data;
    } catch (error) {
      return undefined;
    }
  }
  static async getSession(cookies?: string): Promise<ISession | null> {
    try {
      const config = cookies ? { headers: { Cookie: cookies } } : undefined;
      const response: AxiosResponse<ISession> = await apiInstance.get(
        `/auth/session`,
        config
      );
      return response.data;
    } catch (error) {
      return null;
    }
  }
  static async logout(): Promise<boolean> {
    try {
      await apiInstance.get(`/auth/logout`);
      return true;
    } catch (error) {
      return false;
    }
  }
}
