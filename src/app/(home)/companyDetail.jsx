"use client";
// import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { BiRightArrowCircle } from "react-icons/bi";
import { BsMicrosoftTeams } from "react-icons/bs";
import { MdRoundaboutRight } from "react-icons/md";
import { VscServerProcess } from "react-icons/vsc";

const CompanyDetail = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="company-details px-1 lg:px-24 z-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
      {/* our process div */}

      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
        data-aos="zoom-in"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
        className="bg-white my-[7%] p-5 mx-10 hover:border-b-8 hover:border-b-orange-500 ">
        <VscServerProcess className="mx-auto w-10 h-10 mb-2 text-orange-500"></VscServerProcess>
        <h2 className="text-2xl font-bold mb-4 text-center">
          We're challenging the conventional norms of a typical events company.
        </h2>
        <p className="text-justify">
          We are actively pushing against the established norms and expectations
          associated with traditional events companies. We are daring to think
          differently, innovating, and breaking away from the conventional
          approach to deliver unique and exceptional event experiences. Our aim
          is to redefine the industry by offering fresh perspectives, creative
          solutions, and transformative events that go beyond expectations.
        </p>
        <div className="flex items-center justify-between mt-12">
          <p className="text-xl font-semibold">Get to Know Our Methodology</p>

          <BiRightArrowCircle className="w-8 h-8 text-orange-500" />
        </div>
      </motion.div>

      {/* our team div */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
        data-aos="zoom-in"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="800"
        className="bg-white my-[7%] p-5 mx-10 hover:border-b-8 hover:border-b-orange-500 ">
        <BsMicrosoftTeams className="mx-auto w-10 h-10 mb-2 text-orange-500"></BsMicrosoftTeams>
        <h2 className="text-2xl font-bold mb-4 text-center">
          Your Event Dreams, Our Team's Expertise.
        </h2>
        <p className="text-justify">
          Our team is passionate about creating exceptional events that exceed
          expectations. We work closely with our clients to understand their
          vision, preferences, and objectives, ensuring that every detail is
          carefully curated to reflect their individual style and desires. From
          corporate gatherings to weddings, conferences to private celebrations,
          our team's expertise spans across a diverse range of event types.
        </p>
        <div className="flex  items-center justify-between mt-12">
          <p className="text-xl font-semibold">Know more about our team</p>
          <BiRightArrowCircle className="w-8 h-8 text-orange-500" />
        </div>
      </motion.div>

      {/* about us div */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
        data-aos="zoom-in"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
        className="bg-white my-[7%] p-5 mx-10 hover:border-b-8 hover:border-b-orange-500 ">
        <MdRoundaboutRight className="mx-auto w-10 h-10 mb-2 text-orange-500"></MdRoundaboutRight>
        <h2 className="text-2xl font-bold mb-4 text-center">
          Unveiling Our Story: Crafting Unforgettable Experiences.
        </h2>
        <p className="text-justify">
          We believe that every event has a unique story waiting to unfold. From
          intimate gatherings to grand celebrations, we carefully listen to our
          clients' desires, immerse ourselves in their aspirations, and blend
          our creativity with meticulous attention to detail. This harmonious
          fusion allows us to transform visions into reality, weaving together
          the elements that make each event extraordinary.
        </p>
        <div className="flex  items-center justify-between mt-12">
          <p className="text-xl font-semibold">Gain Insight into what we are</p>
          <BiRightArrowCircle className="w-8 h-8 text-orange-500" />
        </div>
      </motion.div>
    </div>
  );
};

export default CompanyDetail;
