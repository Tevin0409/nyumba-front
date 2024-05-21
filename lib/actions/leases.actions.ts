import axios from "axios";
import { getSession } from "./user.actions";
import { BASE_URL } from "../utils";

export const fetchUserLeasings = async (): Promise<LeaseInfoResponse> => {
  const session = await getSession();
  try {
    const response = await axios.get<LeaseInfoResponse[]>(
      `${BASE_URL}/leases/fetch-my-leases`,
      {
        headers: {
          Authorization: `${session.token}`,
        },
      }
    );

    return { leases: response.data };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      const data = error.response.data as ErrorResponse;
      return { error: data.message };
    } else {
      return { error: "An unexpected error occurred: " + error };
    }
  }
};
