import { httpClient } from '../utils/httpClient';

interface CheckInRequest {
  employee_id: number;
}

interface CheckInResponse {
  timestamp: Date;
  status: string;
}

export const attendanceService = {
  checkIn: async (employeeId: number): Promise<CheckInResponse> => {
    const requestBody: CheckInRequest = {
      employee_id: employeeId,
    };
    try {
      const response = await httpClient.post<CheckInResponse>('/attendance/check-in', requestBody);
      return response.data;
    } catch (error) {
      // Handle the error appropriately
      throw error;
    }
  },
};