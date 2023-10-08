"use client";
import { useForm } from "react-hook-form";
import Toaster from "./Toaster";
import CommonBtn from "./commonBtn";
const buttonText = "Contact Us";
const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = () => {};
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="flex flex-col lg:flex-row gap-2">
          <div className="form-control">
            <label htmlFor="name" className="block text-base font-semibold">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="input input-bordered"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-500 text-base mt-1">
                Please enter your name.
              </span>
            )}
          </div>
          <div className="form-control">
            <label htmlFor="email" className="block text-base font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="input input-bordered"
              {...register("email", {
                required: true,
                // pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/,
              })}
            />
            {errors.email && (
              <span className="text-red-500 text-base mt-1">
                Please enter a valid email address.
              </span>
            )}
          </div>
        </div>
        <div className="form-control">
          <label htmlFor="subject" className="block text-base font-semibold">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="input input-bordered"
            {...register("subject", { required: true })}
          />
          {errors.subject && (
            <span className="text-red-500 text-base mt-1">
              Please enter a subject.
            </span>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="message" className="block text-base font-semibold">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="textarea textarea-bordered h-32"
            {...register("message", { required: true })}></textarea>
          {errors.message && (
            <span className="text-red-500 text-base mt-1">
              Please enter a message.
            </span>
          )}
        </div>
        <div className="form-control mt-6">
          <CommonBtn buttonText={buttonText}></CommonBtn>
        </div>
        <Toaster></Toaster>
      </form>
    </>
  );
};

export default ContactForm;
