import CommonBtn from "@/components/commonBtn";
import ContactWave from "@/components/contactWave";
import ContactBannerLottie from "./bannerLottie";
const buttonText = "Contact";
const ContactBanner = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <ContactBannerLottie></ContactBannerLottie>
        <div className="my-20 w-[40vw] mr-10">
          <h1 className="text-4xl md:text-5xl lg:text-7xl">
            <span className="font-bold">Contact</span> US
          </h1>
          <h4 className="text-xl mt-6 text-justify mb-10">
            "Feel free to reach out to us anytime! Whether you have questions
            about our event planning services or you're ready to start planning
            your next unforgettable event, our team is here to assist you. We
            look forward to hearing from you and turning your event dreams into
            reality."
          </h4>

          <CommonBtn buttonText={buttonText}></CommonBtn>
        </div>
      </div>
      <ContactWave></ContactWave>
    </>
  );
};

export default ContactBanner;
