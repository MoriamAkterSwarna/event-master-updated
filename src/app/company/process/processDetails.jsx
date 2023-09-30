"use client";
import MySVGComponent from "@/components/svgComponents";
import AOS from "aos";
import "aos/dist/aos.css";
import Lottie from "lottie-react";
import Image from "next/image";
import { useEffect } from "react";
import processBg from "../../../assets/19197591.jpg";
import browseLottie from "../../../assets/process-lottie/animation_ll0h19d3.json";
import accountLottie from "../../../assets/process-lottie/animation_ll0h5oe3.json";
import consultLottie from "../../../assets/process-lottie/animation_ll0h7ghe.json";
import budgetLottie from "../../../assets/process-lottie/animation_ll0h97y6.json";
import reviewLottie from "../../../assets/process-lottie/animation_ll0jf85p.json";
import proposalLottie from "../../../assets/process-lottie/animation_ll0jgwo5.json";
import designLottie from "../../../assets/process-lottie/animation_ll0jpxuz.json";
import executionLottie from "../../../assets/process-lottie/animation_ll0juuua.json";
import postLottie from "../../../assets/process-lottie/animation_ll0k3lhc.json";
import feedbackLottie from "../../../assets/process-lottie/animation_ll0k4wiv.json";
const ProcessDetails = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row">
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className=" w-[100%] lg:w-1/2 h-full lg:h-[80vh]">
          <Image
            className="object-cover"
            src={processBg}
            alt=""
            placeholder="blur"
          />
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

      <div className="mx-20 bg-orange-500 h-2 rounded-lg mb-10"></div>

      <>
        {/* step 1 browse and explore */}
        <div className="flex justify-center flex-col lg:flex-row text-white mx-3 lg:mx-20 ">
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
        <div className="flex justify-center flex-col-reverse lg:flex-row text-white mx-3 lg:mx-20">
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

        {/* step 4 budget discussion */}
        <div className="flex justify-center flex-col-reverse lg:flex-row text-white mx-3 lg:mx-20">
          <div data-aos="fade-up" data-aos-duration="3000" className="w-[50vw]">
            <Lottie
              className="w-full lg:w-4/5 mx-20 lg:mx-10 h-[40vh] lg:h-[60vh] "
              animationData={budgetLottie}
              loop={true}
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="bg-slate-500 w-[100%] lg:w-[50vw] pt-[10%] px-4 pb-4 lg:pb-0 lg:px-20">
            <h2 className="text-5xl mb-6 font-bold"> Budget Discussion</h2>
            <p className="text-xl text-justify">
              The event planner will also discuss your budget for the event.
              They'll help you determine a realistic budget and provide insights
              into how to make the most of your funds.
            </p>
          </div>
        </div>
        {/* step 5 Customized Proposal */}
        <div className="flex justify-center flex-col lg:flex-row text-white mx-3 lg:mx-20">
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="bg-orange-500 w-[100%] lg:w-[50vw] pt-[10%] px-4 pb-4 lg:pb-0 lg:px-20">
            <h2 className="text-5xl mb-6 font-bold"> Customized Proposal</h2>
            <p className="text-xl text-justify">
              Based on your consultation, the event planner will create a
              customized proposal that outlines their services, a detailed event
              plan, estimated costs, and a timeline.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-duration="3000" className="w-[50vw]">
            <Lottie
              className="w-full lg:w-4/5 mx-20 lg:mx-10 h-[40vh] lg:h-[60vh] "
              animationData={proposalLottie}
              loop={true}
            />
          </div>
        </div>
        {/* step 6 Review and Adjustments */}
        <div className="flex justify-center flex-col-reverse lg:flex-row text-white mx-3 lg:mx-20">
          <div data-aos="fade-up" data-aos-duration="3000" className="w-[50vw]">
            <Lottie
              className="w-full lg:w-4/5 mx-20 lg:mx-10 h-[40vh] lg:h-[60vh] "
              animationData={reviewLottie}
              loop={true}
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="bg-slate-500 w-[100%] lg:w-[50vw] pt-[10%] px-4 pb-4 lg:pb-0 lg:px-20">
            <h2 className="text-5xl mb-6 font-bold"> Review and Adjustments</h2>
            <p className="text-xl text-justify">
              Review the proposal and provide feedback. If needed, the planner
              will make adjustments to align with your preferences and budget.
            </p>
          </div>
        </div>

        {/* step 7 Design and Planning*/}
        <div className="flex justify-center flex-col lg:flex-row text-white mx-3 lg:mx-20">
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="bg-orange-500 w-[100%] lg:w-[50vw] pt-[10%] px-4 pb-4 lg:pb-0 lg:px-20">
            <h2 className="text-5xl mb-6 font-bold"> Design and Planning</h2>
            <p className="text-xl text-justify">
              Collaborate with the event planner to design the event's layout,
              theme, decorations, and other elements. They'll work closely with
              you to ensure every detail reflects your vision.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-duration="3000" className="w-[50vw]">
            <Lottie
              className="w-full lg:w-4/5 mx-20 lg:mx-10 h-[40vh] lg:h-[60vh] "
              animationData={designLottie}
              loop={true}
            />
          </div>
        </div>

        {/* step 8 Event Day Execution */}
        <div className="flex justify-center flex-col-reverse lg:flex-row text-white mx-3 lg:mx-20">
          <div data-aos="fade-up" data-aos-duration="3000" className="w-[50vw]">
            <Lottie
              className="w-full lg:w-4/5 mx-20 lg:mx-10 h-[40vh] lg:h-[60vh] "
              animationData={executionLottie}
              loop={true}
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="bg-slate-500 w-[100%] lg:w-[50vw] pt-[10%] px-4 pb-4 lg:pb-0 lg:px-20">
            <h2 className="text-5xl mb-6 font-bold"> Event Day Execution</h2>
            <p className="text-xl text-justify">
              On the event day, the event planner and their team will be on-site
              to manage setup, coordination, and any unforeseen issues that may
              arise. This allows you to enjoy the event stress-free.
            </p>
          </div>
        </div>

        {/* step 9 Post-Event Wrap-Up*/}
        <div className="flex justify-center flex-col lg:flex-row text-white mx-3 lg:mx-20">
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="bg-orange-500 w-[100%] lg:w-[50vw] pt-[10%] px-4 pb-4 lg:pb-0 lg:px-20">
            <h2 className="text-5xl mb-6 font-bold"> Post-Event Wrap-Up</h2>
            <p className="text-xl text-justify">
              After the event, the planner will oversee the breakdown and
              cleanup, ensuring that the venue is left in the same condition as
              when it was rented.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-duration="3000" className="w-[50vw]">
            <Lottie
              className="w-full lg:w-4/5 mx-20 lg:mx-10 h-[40vh] lg:h-[60vh] "
              animationData={postLottie}
              loop={true}
            />
          </div>
        </div>

        {/* step 10 Feedback and Follow-Up */}
        <div className="flex justify-center flex-col-reverse lg:flex-row text-white mx-3 lg:mx-20">
          <div data-aos="fade-up" data-aos-duration="3000" className="w-[50vw]">
            <Lottie
              className="w-full lg:w-4/5 mx-20 lg:mx-10 h-[40vh] lg:h-[60vh] "
              animationData={feedbackLottie}
              loop={true}
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="bg-slate-500 w-[100%] lg:w-[50vw] pt-[10%] px-4 pb-4 lg:pb-0 lg:px-20">
            <h2 className="text-5xl mb-6 font-bold"> Feedback and Follow-Up</h2>
            <p className="text-xl text-justify">
              Share your feedback with the event planner. This helps them
              improve their services and build better experiences for future
              clients.
            </p>
          </div>
        </div>
      </>
      <div className="mx-20 bg-orange-500 h-2 rounded-lg my-10 "></div>

      <>
        <h2 className="text-4xl font-bold text-center mb-6">
          Our Commitment to You
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:mx-20 my-10">
          <div className=" border-2 border-orange-500 hover:bg-orange-500 p-6 rounded-lg hover:text-white">
            <h3 className="text-2xl font-bold">Personalized Service</h3>
            <p>
              We tailor every aspect of your event to match your unique vision
              and preferences.
            </p>
          </div>
          <div className=" border-2 border-orange-500 hover:bg-orange-500 p-6 rounded-lg hover:text-white">
            <h3 className="text-2xl font-bold">Attention to Detail</h3>
            <p>
              We meticulously plan and execute every element of your event to
              perfection.
            </p>
          </div>
          <div className=" border-2 border-orange-500 hover:bg-orange-500 p-6 rounded-lg hover:text-white">
            <h3 className="text-2xl font-bold">Timely Execution</h3>
            <p>
              Your event will be seamlessly coordinated and executed on
              schedule.
            </p>
          </div>
        </div>
      </>

      <>
        <MySVGComponent></MySVGComponent>
      </>
    </>
  );
};

export default ProcessDetails;
