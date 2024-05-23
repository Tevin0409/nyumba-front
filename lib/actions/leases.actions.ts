import axios from "axios";
import { getSession } from "./user.actions";
import { BASE_URL } from "../utils";

export const fetchUserLeasings = async (): Promise<LeaseInfoResponse> => {
  const session = await getSession();
  try {
    const response = await axios.get<LeaseInfoResponse[]>(
      `${BASE_URL}/leases/fetch-lease/user`,
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
export const fetchMyPropertyLeasings = async (): Promise<LeaseInfoResponse> => {
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
export const createLease = async (
  leaseId: string,
  leaseDetails: any
): Promise<any> => {
  try {
    const session = await getSession();
    console.log(leaseId);
    const response = await axios.post<any>(
      `${BASE_URL}/leases/create-lease`,
      { listingId: leaseId, leaseInfo: leaseDetails },
      {
        headers: {
          Authorization: `${session.token}`,
        },
      }
    );
    return {
      success: "Lease created successfully",
      lease: response.data.lease,
      // transactionHash: response.data.transactionHash,
    };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      const data = error.response.data as ErrorResponse;
      return { error: data.message };
    } else {
      return { error: "An unexpected error occurred: " + error };
    }
  }
};
