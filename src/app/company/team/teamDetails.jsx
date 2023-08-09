import "aos/dist/aos.css";
import Image from "next/image";
import { BiSolidTimer } from "react-icons/bi";
import { BsPersonWorkspace } from "react-icons/bs";
import { GiInspiration, GiPostOffice, GiTargetPrize } from "react-icons/gi";
import { MdSocialDistance } from "react-icons/md";
import team1 from "../../../assets/team/business-people.jpg";
import team6 from "../../../assets/team/business-people1.jpg";
import team5 from "../../../assets/team/event-manager-showing-something-laptop-woman.jpg";
import team4 from "../../../assets/team/female-wedding-planner-working-ceremony.jpg";
import team3 from "../../../assets/team/handsome-businessman-with-women-standing-working-cafe.jpg";
import team2 from "../../../assets/team/three-beautiful-smiling-women-happily-looking-camera-holding.jpg";

const TeamDetails = () => {
  return (
    <div>
      <div className="team-banner text-center">
        {/* banner div */}
        <div data-aos="fade-up" data-aos-duration="3000">
          <h2 className="text-5xl font-bold pt-20 pb-4 ">
            "Be Part of the Magic: Join <br /> Our Event Planning Team!"
          </h2>
          <h4 className="text-xl font-medium z-10">
            Turning Dreams into Unforgettable Events, Together.
          </h4>
        </div>
      </div>
      {/* gallery */}
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-20 my-10">
        <div
          data-aos="flip-right"
          data-aos-duration="3000"
          className="grid grid-cols-1 md:grid-cols-2">
          <Image className="" src={team1} alt=""></Image>
          <Image src={team2} alt=""></Image>
          <Image src={team3} alt=""></Image>
          <Image src={team4} alt=""></Image>
          <Image src={team5} alt=""></Image>
          <Image src={team6} alt=""></Image>
        </div>
        <div
          data-aos="flip-left"
          data-aos-duration="3000"
          className="bg-orange-500 py-10 px-20">
          <h4 className="text-justify mt-20 mb-3 text-white">
            "Welcome to our passionate and dynamic event planning team! We are a
            group of creative minds dedicated to crafting extraordinary
            experiences that leave lasting memories. With a blend of innovative
            ideas, meticulous planning, and a deep understanding of our clients'
            visions, we transform ordinary occasions into magical moments.
            <br /> <br /> Our team is a diverse tapestry of event experts, each
            bringing a unique set of skills and talents to the table. From
            conceptualization to execution, we thrive on collaboration,
            attention to detail, and a commitment to delivering perfection in
            every event we curate. <br />
            <br /> With a deep love for celebrations and a flair for the
            extraordinary, we ensure that each event is a true reflection of our
            clients' personalities and desires.
            <br />
            Whether it's an elegant wedding, a corporate gala, or a whimsical
            themed party, we thrive on turning dreams into reality. We pride
            ourselves on not only meeting but exceeding expectations, leaving
            our clients and their guests in awe at every turn. Join us in
            crafting unforgettable moments and making celebrations come alive!"
          </h4>
        </div>
      </div>

      {/*facilities  */}

      <>
        <h2 className="text-5xl font-bold text-center mt-10 mb-2">
          Facilities
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-20 my-10">
          <div className="border-b-2 border-x-2 border-orange-500 text-center p-6 rounded-md">
            <BsPersonWorkspace className="w-20 h-20 -mt-14 mx-auto mb-4 text-orange-500"></BsPersonWorkspace>
            <h3 className="text-xl font-bold mb-4">Spacious Workspace</h3>
            <p className="text-justify">
              Offer well-designed workstations and office spaces that promote
              creativity and collaboration. An open layout with dedicated areas
              for brainstorming and quiet work can enhance productivity.
            </p>
          </div>
          <div className="border-b-2 border-x-2 border-orange-500 text-center p-6 rounded-md">
            <GiInspiration className="w-20 h-20 -mt-14 mx-auto mb-4 text-orange-500"></GiInspiration>
            <h3 className="text-xl font-bold mb-4">Inspiring Ambiance</h3>
            <p className="text-justify">
              Create an inspiring and motivating ambiance with decor that aligns
              with your brand's aesthetics. Consider using elements that evoke
              creativity, such as mood lighting, wall art, and plants.
            </p>
          </div>
          <div className="border-b-2 border-x-2 border-orange-500 text-center p-6 rounded-md">
            <BiSolidTimer className="w-20 h-20 -mt-14 mx-auto mb-4 text-orange-500"></BiSolidTimer>
            <h3 className="text-xl font-bold mb-4">Flexible Work Hours</h3>
            <p className="text-justify">
              Provide flexibility in work hours, allowing your team to maintain
              a healthy work-life balance. This could include options for remote
              work, flexible hours, or compressed workweeks.
            </p>
          </div>
          <div className="border-b-2 border-x-2 border-orange-500 text-center p-6 rounded-md">
            <GiPostOffice className="w-20 h-20 -mt-14 mx-auto mb-4 text-orange-500"></GiPostOffice>
            <h3 className="text-xl font-bold mb-4">Professional Development</h3>
            <p className="text-justify">
              Support your team's growth by offering access to workshops,
              seminars, and courses related to event planning, leadership, and
              personal development.
            </p>
          </div>
          <div className="border-b-2 border-x-2 border-orange-500 text-center p-6 rounded-md">
            <MdSocialDistance className="w-20 h-20 -mt-14 mx-auto mb-4 text-orange-500"></MdSocialDistance>
            <h3 className="text-xl font-bold mb-4">Social Spaces</h3>
            <p className="text-justify">
              Create spaces where team members can interact informally,
              fostering a sense of community. This could include lounge areas,
              game rooms, or team-building spaces.
            </p>
          </div>
          <div className="border-b-2 border-x-2 border-orange-500 text-center p-6 rounded-md">
            <GiTargetPrize className="w-20 h-20 -mt-14 mx-auto mb-4 text-orange-500"></GiTargetPrize>
            <h3 className="text-xl font-bold mb-4">Recognition and Rewards</h3>
            <p className="text-justify">
              Implement a recognition program to acknowledge and appreciate your
              team's hard work. This could include regular appreciations,
              awards, or bonuses tied to performance.
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default TeamDetails;
