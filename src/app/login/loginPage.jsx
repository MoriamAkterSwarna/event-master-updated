"use client";
import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import useAuth from "@/hooks/useAuth";
import { toast } from "react-toastify";
import Toaster from "@/components/Toaster";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signIn, googleLogin } = useAuth();
  const onSubmit = async (data) => {
    const { email, password } = data;
    console.log(email, password);
    try {
      const user = await signIn(email, password);

      toast.success("Google Sign In Done!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      toast.success("Login Successful!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } catch (error) {
      toast.error(error.message || "Login Failed!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };
  const handleGoogleLogin = async () => {
    console.log("google login");

    try {
      const user = await googleLogin();

      toast.success("Google Login successful!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } catch (error) {
      toast.error(error.message || "Login Failed!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
      <div className="form-control">
        <input
          type="email"
          placeholder="email"
          id="email"
          name="email"
          className="input input-bordered"
          autoComplete="email"
          {...register(
            "email"
            //   , {
            //     required: true,
            //     pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/,
            //   }
          )}
        />
        {/* {errors.email && (
          <span className="text-red-500 text-base mt-1">
            Please enter a valid email address.
          </span>
        )} */}
      </div>
      <div className="form-control">
        <input
          type="password"
          placeholder="password"
          id="password"
          name="password"
          className="input input-bordered"
          autoComplete="new-password"
          {...register("password", { required: true, minLength: 6 })}
        />
        {/* {errors.password && (
          <span className="text-red-500 text-base mt-1">
            Please enter a password.
          </span>
        )} */}
        {/* <label className="label">
          <a href="#" className="label-text-alt link link-hover">
            Forgot password?
          </a>
        </label> */}
      </div>
      <div className="form-control mt-6">
        <button
          className="btn bg-orange-500 text-white hover:bg-orange-600 hover:text-black"
          type="submit">
          Login
        </button>
      </div>
      <p className="mt-3">
        Don&apos;t have an account?
        <Link className="text-orange-500 underline ml-1" href="/signup">
          Signup
        </Link>
      </p>
      <div className="divider mt-5">OR</div>
      <button
        onClick={handleGoogleLogin}
        type="button"
        className="btn bg-orange-500 text-white hover:text-black hover:bg-orange-600 mt-5 mx-auto">
        <FcGoogle className="text-3xl mr-3" /> Continue with google
      </button>
      <Toaster></Toaster>
    </form>
  );
};

export default LoginForm;
