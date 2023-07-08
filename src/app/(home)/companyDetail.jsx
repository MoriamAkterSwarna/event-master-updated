
// import Link from "next/link";
import React from "react";
import { VscServerProcess } from 'react-icons/vsc';
import { BiRightArrowCircle} from 'react-icons/bi';
import { BsMicrosoftTeams } from 'react-icons/bs';



const CompanyDetail = () => {
    
  return (
    <div  className="company-details px-24 z-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* our process div */}
      <div className="bg-white h-[80%] my-[10%] p-5 mx-10 hover:border-b-8 hover:border-b-orange-500">
        <VscServerProcess className=" mx-auto w-10 h-10 mb-2 text-orange-500"></VscServerProcess>
        <h2 className="text-2xl font-bold mb-4 text-center">
          We're challenging the conventional norms of a typical events company.
        </h2>
        <p className="text-justify">we are actively pushing against the established norms and expectations associated with traditional events companies. We are daring to think differently, innovating, and breaking away from the conventional approach to deliver unique and exceptional event experiences. Our aim is to redefine the industry by offering fresh perspectives, creative solutions, and transformative events that go beyond expectations.</p>

        
       <div className="flex mt-3 items-center justify-between">
       <p className="text-xl font-semibold text-orange-500">Learn about Our Process 
          </p> 
          <BiRightArrowCircle className="w-8 h-8 text-orange-500" />
       </div>
      </div>

      {/* out team div */}
      <div className="bg-white h-[80%] my-[10%] p-5 mx-10 hover:border-b-8 hover:border-b-orange-500">
        <BsMicrosoftTeams className=" mx-auto w-10 h-10 mb-2 text-orange-500"></BsMicrosoftTeams>
        <h2 className="text-2xl font-bold mb-4 text-center">
        Your Event Dreams, Our Team's Expertise.
        </h2>
        <p className="text-justify">Our team is passionate about creating exceptional events that exceed expectations. We work closely with our clients to understand their vision, preferences, and objectives, ensuring that every detail is carefully curated to reflect their individual style and desires. From corporate gatherings to weddings, conferences to private celebrations, our team's expertise spans across a diverse range of event types.</p>

        
       <div className="flex mt-3 items-center justify-between">
       <p className="text-xl font-semibold text-orange-500">Learn about Our Process 
          </p> 
          <BiRightArrowCircle className="w-8 h-8 text-orange-500" />
       </div>
      </div>
    </div>
  );
};

export default CompanyDetail;
