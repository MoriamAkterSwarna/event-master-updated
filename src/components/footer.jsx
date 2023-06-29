import Image from "next/image";
import logo from "../assets/icons8-event-accepted-80.png";
import { BsFacebook, BsInstagram, BsPinterest, BsTwitter } from 'react-icons/bs';
const services = [
  { title: "Wedding Planning", link: "/wedding-planning" },
  { title: "Corporate Events", link: "/corporate-events" },
  { title: "Birthday Parties", link: "/birthday-parties" },
  { title: "Social Gatherings", link: "/social-gatherings" },
];
const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-gray-600  text-gray-950">
        <div>
          <Image className="w-16" src={logo} alt="Event master Logo"></Image>
          <p>
            Event Master Ltd.
            <br />
            Providing reliable Event Planning since 2015
          </p>
        </div>
        <div className="footer-services">
          <h3 className="text-xl text-white font-bold">Services</h3>
          <ul>
            {services.map((service, index) => (
              <li key={index} className="mb-1">
                <a
                  className="hover:text-orange-500 hover:font-semibold"
                  href={service.link}
                >
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <span className="text-xl text-white font-bold">Company</span>
          <a className="hover:text-orange-500 hover:font-semibold">About us</a>
          <a className="hover:text-orange-500 hover:font-semibold">Contact</a>
          <a className="hover:text-orange-500 hover:font-semibold">Services</a>
        </div>
        <div>
          <span className="text-xl text-white font-bold">Legal</span>
          <a className="hover:text-orange-500 hover:font-semibold">
            Terms of use
          </a>
          <a className="hover:text-orange-500 hover:font-semibold">
            Privacy policy
          </a>
          <a className="hover:text-orange-500 hover:font-semibold">
            Cookie policy
          </a>
        </div>
      </footer>
     
      <div className="bg-gray-600 py-8 footer-center text-gray-950 border-t-2 border-gray-700">
        
          
          
            
        <div className="flex justify-center mb-4">
        <div className="text-white font-bold bg-blue-500 hover:bg-blue-700 w-20 py-3 mask mask-hexagon-2 mr-2">
            <BsFacebook className="w-12 h-12 mx-auto"></BsFacebook>
        </div>
        <div className="text-white font-bold  bg-rose-500 hover:bg-rose-700 w-20 py-3 mask mask-hexagon-2 mr-2">
            <BsInstagram className="w-12 h-12 mx-auto"></BsInstagram>
        </div>
        <div className="text-white font-bold  bg-blue-400 hover:bg-blue-600 w-20 py-3 mask mask-hexagon-2 mr-2">
            <BsTwitter className="w-12 h-12 mx-auto"> </BsTwitter>
        </div>
        <div className="text-white font-bold  bg-red-500 hover:bg-red-700 w-20 py-3 mask mask-hexagon-2 mr-2">
            <BsPinterest className="w-12 h-12 mx-auto"> </BsPinterest>
        </div>
        
        </div>
        <p className="mx-auto">
          Copyright &copy; 2023 - All right reserved by{" "}
          <span className="text-orange-500">Event Master</span> Ltd.
        </p>
      </div>
    </div>
  );
};

export default Footer;
