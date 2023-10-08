import { BiWorld } from "react-icons/bi";
import { FaLocationDot, FaPhoneFlip } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const OthersContactInfo = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 my-10 gap-10 mx-[10%]">
      <div>
        <div
          style={{ borderRadius: "50%", width: "70px", height: "70px" }}
          className="bg-black flex justify-center items-center">
          <FaLocationDot className="text-4xl text-orange-500"></FaLocationDot>
        </div>
        <p className="mt-3">
          123 Main Street, <br /> California, USA 12345
        </p>
      </div>
      <div>
        <div
          style={{ borderRadius: "50%", width: "70px", height: "70px" }}
          className="bg-black flex justify-center items-center">
          <FaPhoneFlip className="text-4xl text-orange-500"></FaPhoneFlip>
        </div>
        <p className="mt-3">
          {" "}
          <span className="font-bold">Phone:</span> +9288393345
        </p>
      </div>
      <div>
        <div
          style={{ borderRadius: "50%", width: "70px", height: "70px" }}
          className="bg-black flex justify-center items-center mb-3">
          <MdEmail className="text-4xl text-orange-500"></MdEmail>
        </div>
        <p>
          {" "}
          <span className="font-bold">Email:</span>
          <a href="mailto:eventmaster@gmail.com">eventmaster@gmail.com</a>
        </p>
      </div>
      <div>
        <div
          style={{ borderRadius: "50%", width: "70px", height: "70px" }}
          className="bg-black flex justify-center items-center">
          <BiWorld className="text-4xl text-orange-500"></BiWorld>
        </div>
        <p className="mt-3">
          <span className="font-bold">Website:</span>
        </p>
      </div>
    </div>
  );
};

export default OthersContactInfo;
