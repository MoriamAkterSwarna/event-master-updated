"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import Lottie from "lottie-react";
import Image from "next/image";
import { useEffect } from "react";
import processBg from "../../../assets/19197591.jpg";
import browseLottie from "../../../assets/process-lottie/animation_ll0h19d3.json";
import accountLottie from "../../../assets/process-lottie/animation_ll0h5oe3.json";
import consultLottie from "../../../assets/process-lottie/animation_ll0h7ghe.json";
const ProcessDetails = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <div className="flex flex-col-reverse lg:flex-row">
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className=" w-[100%] lg:w-1/2 h-full lg:h-[80vh]">
          <Image className="object-cover" src={processBg} alt="" />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="my-6 lg:my-20 ml-2 mr-2 md:mx-4 lg:mx-10 w-[97%] lg:w-1/2 ">
          <h2 className="text-5xl text-orange-500">
            Turning Dreams into Memorable Events, One Click at a Time!
          </h2>
          <h4 className="mt-4 text-justify text-xl">
            Welcome to our event planning website, where we specialize in
            transforming your visions into unforgettable moments. With a simple
            click, our dedicated team turns your dreams into meticulously
            crafted events that leave lasting impressions.
          </h4>
        </div>
      </div>
      <div className="mx-20 bg-orange-500 h-2 rounded-lg mb-10 "></div>

      <>
        {/* step 1 browse and explore */}
        <div className="flex justify-center flex-col lg:flex-row text-white mx-3 lg:mx-20">
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="bg-orange-500 w-[100%] lg:w-[50vw] pt-[10%] px-4 pb-4 lg:pb-0 lg:px-20">
            <h2 className="text-5xl mb-6 font-bold"> Browse and Explore</h2>
            <p className="text-xl text-justify">
              Start by visiting the event planner website and exploring the
              available services and event options. Familiarize yourself with
              the types of events they specialize in, such as weddings,
              corporate gatherings, parties, and more.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-duration="3000" className="w-[50vw]">
            <Lottie
              className="w-full lg:w-4/5 mx-20 lg:mx-10 h-[40vh] lg:h-[60vh] "
              animationData={browseLottie}
              loop={true}
            />
          </div>
        </div>
        {/* step 2 create account */}
        <div className="flex justify-center flex-col lg:flex-row text-white mx-3 lg:mx-20">
          <div data-aos="fade-up" data-aos-duration="3000" className="w-[50vw]">
            <Lottie
              className="w-full lg:w-4/5 mx-20 lg:mx-10 h-[40vh] lg:h-[60vh] "
              animationData={accountLottie}
              loop={true}
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="bg-slate-500 w-[100%] lg:w-[50vw] pt-[10%] px-4 pb-4 lg:pb-0 lg:px-20">
            <h2 className="text-5xl mb-6 font-bold"> Create an Account</h2>
            <p className="text-xl text-justify">
              If required, create a user account on the website. This will allow
              you to save your preferences, track your event planning progress,
              and receive personalized recommendations.
            </p>
          </div>
        </div>
        {/* step 3 Initial Consultation */}
        <div className="flex justify-center flex-col lg:flex-row text-white mx-3 lg:mx-20">
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="bg-orange-500 w-[100%] lg:w-[50vw] pt-[10%] px-4 pb-4 lg:pb-0 lg:px-20">
            <h2 className="text-5xl mb-6 font-bold"> Initial Consultation</h2>
            <p className="text-xl text-justify">
              After submitting the inquiry, a representative from the event
              planning team will contact you to schedule an initial
              consultation. This can be done over the phone, through video
              conferencing, or in person, depending on your preferences.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-duration="3000" className="w-[50vw]">
            <Lottie
              className="w-full lg:w-4/5 mx-20 lg:mx-10 h-[40vh] lg:h-[60vh] "
              animationData={consultLottie}
              loop={true}
            />
          </div>
        </div>
      </>
    </div>
  );
};

export default ProcessDetails;
