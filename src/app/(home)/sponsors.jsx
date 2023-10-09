import Marquee from "react-fast-marquee";

import image1 from "../../assets/sponsors/InvCompany1.webp";
import image2 from "../../assets/sponsors/InvCompany2.webp";
import image3 from "../../assets/sponsors/InvCompany3.webp";
import image4 from "../../assets/sponsors/InvCompany4.webp";

import Image from "next/image";
const Sponsors = () => {
  return (
    <div className="mt-10 overflow-hidden">
      <h2 className="text-4xl font-bold py-3 text-orange-500 text-center my-6">
        Sponsors
      </h2>
      <Marquee
        className="my-10 bg-orange-100 p-4 hover:bg-orange-400"
        speed="100"
        pauseOnHover="true">
        <Image className="w-64 mr-8" src={image1} alt=""></Image>

        <Image className="w-64 mr-8" src={image2} alt=""></Image>

        <Image className="w-64 mr-8" src={image3} alt=""></Image>
        <Image className="w-64 mr-8" src={image4} alt=""></Image>
        <Image className="w-64 mr-8" src={image2} alt=""></Image>
        <Image className="w-64 mr-8" src={image3} alt=""></Image>
        <Image className="w-64 mr-8" src={image4} alt=""></Image>
      </Marquee>
    </div>
  );
};

export default Sponsors;
