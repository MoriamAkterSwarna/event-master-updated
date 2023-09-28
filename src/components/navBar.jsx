"use client";
import { navData } from "@/data/navData";
import useAuth from "@/hooks/useAuth";
import Image from "next/image";
import Link from "next/link";

import logo from "../assets/icons8-event-accepted-80.png";
import NavLink from "./navLink";
import ProfileMenu from "../components/profileMenu";
import { useState } from "react";
const Navbar = () => {
  const [navToggle, setNavToggle] = useState(false);
  return (
    <>
      <nav className="navbar bg-white top-0 z-10 lg:px-24 flex justify-around container">
        <div className="flex">
          <Image
            src={logo}
            className="w-16 rounded-2xl"
            alt="Event Master Logo"></Image>
          <h1 className="text-3xl text-orange-500 font-bold">Event Master</h1>
        </div>
        <div
          className={`absolute ${
            navToggle ? "left-0" : "left-[-120%]"
          } top-[4.5rem] sm:mt-6 lg:mt-0 flex w-full flex-col pb-3
         pt-2 transition-all duration-500 lg:static lg:w-[unset] lg:flex-row bg-orange-100 lg:bg-transparent  lg:pb-0 lg:pt-0 z-30`}>
          <ul className="menu menu-horizontal flex-col px-1 lg:flex-row lg:justify-center h-full">
            {navData.map(({ path, title, dropdown }) => (
              <li key={path} className="mx-auto">
                {dropdown ? (
                  <details className="dropdown">
                    <summary className="cursor-pointer outline-none drop-icon">
                      {title}
                    </summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] rounded-box w-52">
                      {dropdown.map(
                        ({ path: dropdownPath, title: dropdownTitle }) => (
                          <li key={dropdownPath}>
                            <NavLink
                              onClick={() => setNavToggle(false)}
                              href={dropdownPath}
                              activeClassName="text-orange-500 font-bold hover:bg-orange-500 hover:text-white "
                              exact={dropdownPath === "/"}>
                              {dropdownTitle}
                            </NavLink>
                          </li>
                        )
                      )}
                    </ul>
                  </details>
                ) : (
                  <NavLink
                    onClick={() => setNavToggle(false)}
                    href={path}
                    activeClassName="text-orange-500 font-bold hover:bg-orange-500 hover:text-white"
                    exact={path === "/"}>
                    {title}
                  </NavLink>
                )}
              </li>
            ))}
            <Link href="/registerEvent">
              <li>
                {" "}
                <button className=" btn-outline border-2 border-orange-500 hover:bg-orange-500  hover:border-none hover:text-white">
                  Register An Event
                </button>
              </li>
            </Link>
          </ul>

          {/* {user && (
            <div className="dropdown-end dropdown">
              <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
                <div className="w-10 rounded-full">
                  <Image
                    alt="user-logo"
                    title={displayName}
                    src={
                      photoURL ||
                      "https://i.ibb.co/0QZCv5C/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black.png"
                    }
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full"
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu-compact dropdown-content menu rounded-box mt-3 w-52 bg-base-100 p-2 shadow">
                <li className="mb-2 mt-1 text-center font-semibold">
                  {displayName}
                </li>
                <div className="divider my-0"></div>
                <li className="mb-2">
                  <NavLink
                    href="/profile"
                    className="text-lg"
                    activeClassName="text-blue-500">
                    Profile
                  </NavLink>
                </li>
                <li className="">
                  <button
                    onClick={handleLogout}
                    className="btn-warning btn content-center text-white">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )} */}

          <ProfileMenu></ProfileMenu>
        </div>

        <label className="swap-rotate swap text-orange-500 btn-circle btn ml-2 bg-white lg:hidden">
          <input
            checked={navToggle}
            onChange={() => setNavToggle((pre) => !pre)}
            type="checkbox"
          />
          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512">
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>
          <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512">
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
      </nav>
      <hr />
    </>
  );
};

export default Navbar;
