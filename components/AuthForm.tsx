"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomInput from "./common/CustomInput";
import { authFormSchema } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { signIn, signUp } from "@/lib/actions/user.actions";
import { useAppStore } from "@/store/store";

const AuthForm = ({ type }: { type: string }) => {
  const { setIsLoggedIn, setUserInfo } = useAppStore();

  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formSchema = authFormSchema(type);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      // Authenticate
      if (type === "sign-up") {
        if (data.password !== data.confirmPassword) {
          setError("Password mismatch");
        } else {
          // Sign Up function
          const signUpData = {
            email: data.email,
            firstName: data.firstName!,
            lastName: data.lastName!,
            address: data.address!,
            password: data.password,
            county: data.county!,
            postalCode: data.postalCode!,
            identificationNumber: data.identificationNumber!,
          };
          const response = await signUp(signUpData!);

          if (response.success) {
            router.push("/sign-in");
          } else if (response.error) {
            toast.error(response.error);
            setError(response.error);
          }
        }
      } else {
        // Signin FUnction
        const response = await signIn({
          email: data.email,
          password: data.password,
        });
        if (response.success) {
          toast.success("You've successfully logged in.");
          setIsLoggedIn(true);
          setUserInfo(response.userInfo!);
          router.push("/sign-in");
        } else if (response.error) {
          setError(response.error);
          toast.error(response.error);
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link
          href={"/"}
          className=" cursor-pointer flex justify-center items-center gap-1"
        >
          <Image
            src={"/icons/nyumbadigi-logo.png"}
            alt="logo"
            width={154}
            height={174}
          />
        </Link>
        <div className="flex flex-full gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            {user ? "Link Account" : type === "sign-in" ? "Sign In" : "Sign Up"}
            <p className="text-16 font-normal text-gray-600">
              {user
                ? "Link your account to get started"
                : "Please enter your details to get started"}
            </p>
          </h1>
        </div>
      </header>
      {user ? (
        <div className="flex flex-col gap-4">{/*  */}</div>
      ) : (
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {type === "sign-up" && (
                <>
                  <div className="flex gap-4">
                    <CustomInput
                      control={form.control}
                      label="First Name"
                      name="firstName"
                      placeholder="e.g. John, Jane"
                      type="text"
                    />
                    <CustomInput
                      control={form.control}
                      label="Last Name"
                      name="lastName"
                      placeholder="Doe"
                      type="text"
                    />
                  </div>

                  <CustomInput
                    control={form.control}
                    label="Address"
                    name="address"
                    placeholder="Enter your address"
                    type="text"
                  />
                  <div className="flex gap-4">
                    <CustomInput
                      control={form.control}
                      label="County"
                      name="county"
                      placeholder="Example Nairobi"
                      type="text"
                    />
                    <CustomInput
                      control={form.control}
                      label="Postal Code"
                      name="postalCode"
                      placeholder="Example 1234-xyz"
                      type="text"
                    />
                  </div>
                  <div className="">
                    <CustomInput
                      control={form.control}
                      label="ID Number"
                      name="identificationNumber"
                      placeholder="Example 12345678"
                      type="text"
                    />
                  </div>
                </>
              )}
              <CustomInput
                control={form.control}
                label="Email"
                name="email"
                placeholder="Enter Email"
                type="email"
              />
              {/* Practice Reusability of Input Field */}
              <div className={` ${type === "sign-up" ? "flex gap-4" : ""}`}>
                <CustomInput
                  control={form.control}
                  name="password"
                  label="Password"
                  placeholder="Enter Password"
                  type="password"
                />
                {type === "sign-up" && (
                  <CustomInput
                    control={form.control}
                    name="confirmPassword"
                    label="Confirm Password"
                    placeholder="Confirm Password"
                    type="password"
                  />
                )}
              </div>
              {/* <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <div className="form-item">
                    <FormLabel className="form-label">Password</FormLabel>
                    <div className="flex w-full flex-col">
                      <FormControl>
                        <Input
                          className="input-class"
                          placeholder="Enter your password"
                          type="password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="form-message mt-2" />
                    </div>
                  </div>
                )}
              /> */}
              <div className="flex flex-col gap-4">
                <Button type="submit" disabled={isLoading} className="form-btn">
                  {isLoading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" /> &nbsp;
                      Loading...
                    </>
                  ) : type === "sign-in" ? (
                    "Sign In"
                  ) : (
                    "Sign Up"
                  )}
                </Button>
                {error && <p className="text-md text-red-700 mt-12">{error}</p>}
              </div>
            </form>
          </Form>
          <footer className="flex justify-center gap-1">
            <p className="text-14 font-normal text-gray-600">
              {type === "sign-in"
                ? "Don't have an account?"
                : "Already have an account?"}
            </p>
            <Link
              className="form-link font-medium"
              href={type === "sign-in" ? "/sign-up" : "/sign-in"}
            >
              {type === "sign-in" ? "Sign Up" : "Sign In"}
            </Link>
          </footer>
        </>
      )}
    </section>
  );
};

export default AuthForm;
