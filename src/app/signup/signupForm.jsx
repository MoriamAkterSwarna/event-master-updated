"use client";
import Toaster from "@/components/Toaster";
import useAuth from "@/hooks/useAuth";
import createJwt from "@/utils/createJwt";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm();
  const { createUser, profileUpdate, googleLogin } = useAuth();

  const uploadImage = async (event) => {
    const formData = new FormData();
    if (!event.target.files[0]) return;
    formData.append("image", event.target.files[0]);
    try {
      const res = await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
        {
          method: "POST",
          body: formData,
        }
      );
      if (!res.ok) throw new Error("Failed to upload image");

      const data = await res.json();
      toast.success("🦄Image Added Successfully!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setValue("photo", data.data.url);
    } catch (error) {
      toast.error(error.message || "No user Found!", {
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

  const onSubmit = async (data, event) => {
    const { name, email, password, photo } = data;
    console.log(name, email, password, photo, event);
    try {
      const user = await createUser(email, password);
      createJwt({ email });
      await profileUpdate({
        displayName: name,
        photoURL: photo,
      });
      toast.success(" Registered Successfully!", {
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
      toast.error(error.message || "Not Registered Yet!", {
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
      const { user } = await googleLogin();
      createJwt({ email: user.email });
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
    } catch (error) {
      toast.error(error.message || "Registered Failed!", {
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
          // autoComplete="email"
          {...register("email", {
            required: true,
            //     pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/,
          })}
        />
        {errors.email && (
          <span className="text-red-500 text-base mt-1">
            Please enter a valid email address.
          </span>
        )}
      </div>
      <div className="form-control">
        <input
          type="file"
          id="photo"
          name="photo"
          onChange={uploadImage}
          className="file-input file-input-bordered file-input-red w-full"
          accept="image/*"
          placeholder="Photo"
        />
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
          {...register("confirmPassword", {
            required: true,
            minLength: 6,
            validate: (value) =>
              value === getValues("password") || "The passwords do not match.",
          })}
        />
        {/* {errors.confirmPassword && (
          <span className="text-red-500 text-base mt-1">
            {errors.confirmPassword.message || "Please confirm your password."}
          </span>
        )} */}
      </div>

      <div className="form-control mt-6">
        <button
          className="btn bg-orange-500 text-white hover:bg-orange-600 hover:text-black"
          type="submit">
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
        onClick={handleGoogleLogin}
        type="button"
        className="btn bg-orange-500 text-white hover:bg-orange-600 hover:text-black mt-5 mx-auto">
        <FcGoogle className="text-3xl mr-3" /> Continue with google
      </button>
      <Toaster></Toaster>
    </form>
  );
};

export default SignUpForm;
