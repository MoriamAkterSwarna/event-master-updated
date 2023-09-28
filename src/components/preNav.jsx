"use client";
import Image from "next/image";
import Link from "next/link";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import NavLink from "./navLink";

const PreNav = () => {
  return (
    <div>
      <div className="navbar bg-orange-500 px-2 lg:px-32 text-white flex justify-between flex-col lg:flex-row">
        <div className="flex flex-col lg:flex-row">
          <div className="flex items-center ">
            <HiOutlineMail className="mr-1 h-6 w-6"></HiOutlineMail>
            <p>eventmaster@gmail.com</p>
          </div>
          <div className="flex items-center ml-4 ">
            <AiOutlinePhone className="mr-1 h-6 w-6"></AiOutlinePhone>
            <p>+99-0192939334</p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row">
          <ul className="menu menu-horizontal px-1">
            <li>
              {/* <a>Login</a> */}
              <Link href="/login">Login</Link>
            </li>
            <li>
              <Link href="/signup">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PreNav;
