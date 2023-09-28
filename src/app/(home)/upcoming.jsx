"use client";
import Image from "next/image";
import { BsClock, BsFillBookmarkFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import event from "../../assets/rich-dinner-tables-covered-with-blue-clothes-sparkling-glass.jpg";
import CountdownTimer from "./countDown";

const UpcomingEvents = () => {
  const targetDate = new Date("2023-11-30T00:00:00");
  return (
    <div
      suppressHydrationWarning={true}
      className="flex flex-col md:flex-row items-center justify-center h-full bg-gradient-to-r from-orange-600 to-yellow-500 text-white py-6">
      <div>
        <Image
          className="w-52 py-10 mr-8"
          src={event}
          alt="Upcoming event"></Image>
      </div>
      <div className=" w-full md:w-1/3 mx-4 pl-3">
        <div className="flex items-center">
          <div>
            <BsFillBookmarkFill className="mr-2"></BsFillBookmarkFill>
          </div>
          <p>Latest Featured Event</p>
        </div>
        <h1 className="text-3xl font-bold mb-4">Innovation Summit 2023</h1>
        <p>
          Feel free to use this event name or let me know if you would like more
          suggestions or need assistance with anything else!
        </p>
        <hr className="border-t-2 border-white mt-2" />
        <div className="mt-2 ">
          <div className="flex items-center font-bold">
            <div>
              <BsClock className="w-6 h-6 mr-2"></BsClock>
            </div>
            <p>10.00am</p>
          </div>
          <div className="flex items-center font-bold">
            <div>
              <FaLocationDot className="w-6 h-6 mr-2 mt-2"></FaLocationDot>
            </div>
            <p className="mt-2">New York city</p>
          </div>
        </div>
      </div>
      <CountdownTimer targetDate={targetDate} />
    </div>
  );
};

export default UpcomingEvents;
