"use client";
import Lottie from "lottie-react";
import contactLottie from "../../assets/contactImg/animation_lnh8rhdm.json";

const ContactBannerLottie = () => {
  return (
    <>
      <div className="contact-blob ms-52 relative"></div>
      <div
        data-aos="zoom-in"
        data-aos-duration="6000"
        className="w-[50vw] absolute top-20 -left-8">
        <Lottie
          className="w-full lg:w-4/5 mx-20 lg:mx-10 h-[40vh] lg:h-[90vh] z-20"
          animationData={contactLottie}
          loop={true}
        />
      </div>
    </>
  );
};

export default ContactBannerLottie;
