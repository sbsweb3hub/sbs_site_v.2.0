/** @format */

import { apiInstance } from '@/api/api-instance';

import axios, { AxiosError, AxiosResponse } from 'axios';
import { CreateProjectType, ProjectType } from '@/types';

//@todo - refactor to next fetch
export default class DashboardService {
  static async createProject(
    inputData: CreateProjectType,
    cookies?: string
  ): Promise<any> {
    try {
      const config = cookies ? { headers: { Cookie: cookies } } : undefined;
      console.log('CONF', config);
      const response = await apiInstance.post('/projects', inputData, config);
      return response;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        return error.response?.data.message;
      } else if (error instanceof Error) {
        return error.message;
      } else {
        return 'An unexpected error occurred';
      }
    }
  }

  static async getProjects(): Promise<Array<ProjectType> | null> {
    try {
      const response: AxiosResponse<any> = await apiInstance.get('/projects');
      return response.data;
    } catch (error) {
      return null;
    }
  }
  static async getProjectById(id: string, cookies?: string): Promise<any> {
    try {
      const config = cookies ? { headers: { Cookie: cookies } } : undefined;
      const response = await apiInstance.get(`/projects/${id}`, config);
      return response.data;
    } catch (error) {
      return null;
    }
  }
}
