"use client";
import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import banner1 from "../../assets/banner/calendar-date-organizer-planner-concept.jpg";
import banner2 from "../../assets/banner/female-wedding-planner-working-ceremony.jpg";
import banner3 from "../../assets/banner/group-business-people-having-meeting.jpg";
import Image from "next/image";
const Banner = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <>
      <div ref={sliderRef} className="keen-slider w-full lg:mt-0">
        <div className="keen-slider__slide number-slide1">
          <Image
            className="h-[87vh] object-cover filter brightness-50 relative"
            src={banner1}
            alt="Banner"
          ></Image>
          <div className="mx-auto absolute left-[10%] md:top-[40%] top-32 md:left-[20%] lg:top-32  lg:left-[36%] text-white">
            <h2 className="text-4xl text-gray-300">The Perfect Occasion</h2>
            <h2 className="text-6xl font-bold mt-4">Event Master</h2>
            <p className=" mt-4 uppercase text-gray-300">
              Your Perfect Partner for Memorable Events
            </p>
            <button className="bg-gradient-to-br from-orange-400 via-orange-500 to-yellow-300 hover:bg-gradient-to-br hover:from-yellow-400 hover:via-orange-500 hover:to-yellow-500 text-white font-semibold py-3 px-6 rounded-full mt-6">
              Plan An Event
            </button>
            <button className="btn-outline border-2 border-orange-500 hover:bg-orange-500  hover:border-none text-white font-semibold py-3 px-6 rounded-full mt-6 ml-6">
              Contact Us
            </button>
          </div>
        </div>
        <div className="keen-slider__slide number-slide2">
          <Image
            className="h-[87vh] object-cover filter brightness-50"
            src={banner2}
            alt="Banner"
          ></Image>
          <div className=" mx-auto absolute left-[10%] top-32 md:top-[40%] md:left-[20%] lg:left-[36%] lg:top-32  text-white">
            <h2 className="text-4xl text-gray-300">The Perfect Occasion</h2>
            <h2 className="text-6xl font-bold mt-4">Event Master</h2>
            <p className=" mt-4 uppercase text-gray-300">
              Your Perfect Partner for Memorable Events
            </p>
            <button className="bg-gradient-to-br from-orange-400 via-orange-500 to-yellow-300 hover:bg-gradient-to-br hover:from-yellow-400 hover:via-orange-500 hover:to-yellow-500 text-white font-semibold py-3 px-6 rounded-full mt-6">
              Plan An Event
            </button>
            <button className="btn-outline border-2 border-orange-500 hover:bg-orange-500  hover:border-none text-white font-semibold py-3 px-6 rounded-full mt-6 ml-6">
              Contact Us
            </button>
          </div>
        </div>
        <div className="keen-slider__slide number-slide3">
          <Image
            className="h-[87vh] object-cover filter brightness-50"
            src={banner3}
            alt="Banner"
          ></Image>
          <div className=" mx-auto absolute left-[10%] top-32 md:top-[40%] lg:top-32 md:left-[20%] lg:left-[36%] text-white">
            <h2 className="text-4xl text-gray-300">The Perfect Occasion</h2>
            <h2 className="text-6xl font-bold mt-4">Event Master</h2>
            <p className=" mt-4 uppercase text-gray-300">
              Your Perfect Partner for Memorable Events
            </p>
            <button className="bg-gradient-to-br from-orange-400 via-orange-500 to-yellow-300 hover:bg-gradient-to-br hover:from-yellow-400 hover:via-orange-500 hover:to-yellow-500 text-white font-semibold py-3 px-6 rounded-full mt-6">
              Plan An Event
            </button>
            <button className="btn-outline border-2 border-orange-500 hover:bg-orange-500  hover:border-none text-white font-semibold py-3 px-6 rounded-full mt-6 ml-6">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
