interface CheckInRequest {
  employee_id: number;
}

interface CheckInResponse {
  employee_id: number;
  check_in_time: Date;
}

export const attendanceService = {
  checkIn: async (employeeId: number): Promise<CheckInResponse> => {
    const requestBody: CheckInRequest = {
      employee_id: employeeId, // The request body now includes the employee ID
    };
    try {
      const response = await httpClient.post<CheckInResponse>('/api/attendance/check-in', requestBody);
      switch (response.status) {
        case 200:
          return {
            ...response.data,
            check_in_time: response.data.check_in_time,
          }; // Return the response data including the check-in time
        case 400:
          throw new Error('Bad Request: The request was malformed or contained invalid parameters.');
        case 401:
          throw new Error('Unauthorized: The request requires user authentication.');
        default:
          throw new Error('An unexpected error occurred.');
      }
    } catch (error) {
      throw new Error(`An error occurred while checking in: ${error}`);
    }
  },
};