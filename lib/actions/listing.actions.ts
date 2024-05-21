import axios from "axios";
import { BASE_URL } from "../utils";
import { getSession } from "./user.actions";

export const createListing = async (
  listingData: ListingProps
): Promise<ListingResponse> => {
  try {
    const session = await getSession();
    console.log(listingData);
    const response = await axios.post<ListingProps>(
      `${BASE_URL}/listings/create-listing`,
      listingData,
      {
        headers: {
          Authorization: `${session.token}`,
        },
      }
    );
    return { success: "Listing created successfully", listing: response.data };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      const data = error.response.data as ErrorResponse;
      return { error: data.message };
    } else {
      return { error: "An unexpected error occurred: " + error };
    }
  }
};

// Fetch All Listings
export const fetchAllListings = async (): Promise<ListingResponse> => {
  try {
    const response = await axios.get<ListingProps[]>(
      `${BASE_URL}/listings/fetch-listings`
    );
    return { listings: response.data };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      const data = error.response.data as ErrorResponse;
      return { error: data.message };
    } else {
      return { error: "An unexpected error occurred: " + error };
    }
  }
};

export const fetchListingById = async (listingId: string): Promise<any> => {
  try {
    const response = await axios.get<ListingProps>(
      `${BASE_URL}/listings/fetch-listing/${listingId}`
    );
    // console.log(BASE_URL);

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      const data = error.response.data as ErrorResponse;
      return { error: data.message };
    } else {
      return { error: "An unexpected error occurred: " + error };
    }
  }
};

export const fetchUserListings = async (): Promise<ListingResponse> => {
  const session = await getSession();
  try {
    const response = await axios.get<ListingProps[]>(
      `${BASE_URL}/listings/fetch-listings/user`,
      {
        headers: {
          Authorization: `${session.token}`,
        },
      }
    );
    console.log("mine", response);

    return { listings: response.data };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      const data = error.response.data as ErrorResponse;
      return { error: data.message };
    } else {
      return { error: "An unexpected error occurred: " + error };
    }
  }
};

// Edit Listing
export const editListing = async (
  listingId: string,
  listingData: ListingProps
): Promise<ListingResponse> => {
  try {
    const session = await getSession();
    const response = await axios.put<ListingProps>(
      `${BASE_URL}/listings/${listingId}`,
      listingData,
      {
        headers: {
          Authorization: ` ${session.token}`,
        },
      }
    );
    return { success: "Listing updated successfully", listing: response.data };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      const data = error.response.data as ErrorResponse;
      return { error: data.message };
    } else {
      return { error: "An unexpected error occurred: " + error };
    }
  }
};

// Delete Listing
export const deleteListing = async (
  listingId: string
): Promise<ListingResponse> => {
  try {
    const session = await getSession();
    await axios.delete(`${BASE_URL}/listings/${listingId}`, {
      headers: {
        Authorization: `${session.token}`,
      },
    });
    return { success: "Listing deleted successfully" };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      const data = error.response.data as ErrorResponse;
      return { error: data.message };
    } else {
      return { error: "An unexpected error occurred: " + error };
    }
  }
};
