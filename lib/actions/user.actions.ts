"use server";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import axios from "axios";
import { redirect } from "next/navigation";
import { defaultSession, sessionOptions } from "../session";
import { BASE_URL } from "../utils";

export const getSession = async () => {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  // If user visits for the first time session returns an empty object.
  // Let's add the isLoggedIn property to this object and its value will be the default value which is false
  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
  }

  return session;
};

export const signIn = async (userData: LoginUser): Promise<SignInResult> => {
  try {
    const session = await getSession();
    // Mutation /Database
    const { email, password } = userData;
    const response = await axios.post<LoginResponse>(`${BASE_URL}/auth/login`, {
      email,
      password,
    });
    const { userInfo, token } = response.data;
    session.isLoggedIn = true;
    session.token = token;
    session.user = JSON.stringify(userInfo);
    await session.save();

    return { success: "Logged in Succesfully" };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      const data = error.response.data as ErrorResponse;
      switch (data.errorCode) {
        case 1003:
          return { error: "Invalid Password" };
        case 1001:
          return { error: "User not found" };
        default:
          return { error: "An unexpected error occurred: " + data.message };
      }
    } else {
      return { error: "An unexpected error occurred: " + error };
    }
  }
};
export const signUp = async (userData: SignUpParams): Promise<SignInResult> => {
  try {
    const response = await axios.post<SignUpSuccessResponse>(
      `${BASE_URL}/auth/signup`,
      userData
    );
    const { message } = response.data;

    return { success: message };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      const data = error.response.data as ErrorResponse;
      switch (data.errorCode) {
        case 1002:
          return { error: "User already exists" };
        case 3001:
          const issues = data.errors?.issues;
          if (issues) {
            const errorMessage = issues
              .map((issue: any) => issue.message)
              .join(", ");
            return { error: `Validation error: ${errorMessage}` };
          }
          return { error: data.message };
        default:
          return { error: "An unexpected error occurred: " + data.message };
      }
    } else {
      return { error: "An unexpected error occurred: " + error };
    }
  }
};

export async function logout() {
  const session = await getSession();
  session.destroy();
  redirect("/");
}
