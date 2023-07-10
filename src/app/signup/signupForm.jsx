"use client";
import Link from 'next/link';
import React from 'react';
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";

const SignUpForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
        setValue,
      } = useForm();
    return (
        <form 
        // onSubmit={handleSubmit(onSubmit)} 
        className="card-body">
      <div className="form-control">
       
        <input
          type="text"
          placeholder="name"
          id="name"
          name="name"
          className="input input-bordered"
          {...register("name", { required: true })}
        />
        {/* {errors.name && (
          <span className="text-red-500 text-base mt-1">
            Please enter your name.
          </span>
        )} */}
      </div>
      <div className="form-control">
        
        <input
          type="email"
          placeholder="email"
          id="email"
          name="email"
          className="input input-bordered"
          autoComplete="email"
          {...register("email"
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
      </div>
      <div className="form-control">
       
        <input
          type="password"
          placeholder="Confirm Password"
          id="confirmPassword"
          name="confirmPassword"
          className="input input-bordered"
          autoComplete="new-password"
          {...register("confirmPassword"
          , {
            required: true,
            minLength: 6
            // ,
            // validate: (value) =>
            //   value === getValues("password") || "The passwords do not match.",
          })}
        />
        {/* {errors.confirmPassword && (
          <span className="text-red-500 text-base mt-1">
            {errors.confirmPassword.message || "Please confirm your password."}
          </span>
        )} */}
      </div>
      {/* <div className="form-control">
        <label htmlFor="photo" className="label label-text">
          Photo
        </label>
        <input
          type="file"
          id="photo"
        //   onChange={uploadImage}
          className="file-input file-input-bordered file-input-primary w-full"
        />
      </div> */}
      <div className="form-control mt-6">
        <button className="btn bg-orange-500 text-white hover:bg-orange-600 hover:text-black" type="submit">
          Sign Up
        </button>
      </div>
      <p className="mt-3">
        Already have an account?{" "}
        <Link className="text-orange-500 underline ml-1" href="/login">
          Login
        </Link>
      </p>
      <div className="divider mt-5">OR</div>
      <button
        // onClick={handleGoogleLogin}
        type="button"
        className="btn bg-orange-500 text-white hover:bg-orange-600 hover:text-black mt-5 mx-auto"
      >
        <FcGoogle className="text-3xl mr-3" /> Continue with google
      </button>
    </form>
    );
};

export default SignUpForm;