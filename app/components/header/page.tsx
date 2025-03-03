"use client";

import Image from "next/image";
import React, { useState } from "react";
import Styles from "../../styles/header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const pathname = usePathname();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [projectDropDownOpen, setProjectDropDownOpen] = useState(false);

  return (
    <div className={Styles.overall_header}>
      <div className={Styles.auto_container}>
        <div className="row py-[10px]">
          <div className="col-md-4 pb-[16px]">
            <div className="">
              <Link href="/">
                <Image
                  src="https://uattfsec.truefinedge.com/image-pub/original.svg"
                  alt="logo"
                  width={200}
                  height={100}
                  priority
                />
              </Link>
            </div>
          </div>
          <div className="col-md-8 flex justify-center items-center">
            <ul className="flex gap-9 pt-[20px]">
              <li>
                <Link
                  href="/"
                  className={clsx(
                    "hover:text-customBlue no-underline",
                    pathname === "/"
                      ? "text-customBlue font-bold"
                      : "text-cutomText font-medium"
                  )}
                >
                  Home
                </Link>
              </li>

              <li
                className="relative"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <Link
                  href="/"
                  className={clsx(
                    "hover:text-customBlue  group no-underline flex justify-center items-center transition-all duration-300",
                    pathname === "/pages"
                      ? "text-customBlue font-bold" // Active color blue
                      : "text-cutomText font-medium" // Default black, hover blue
                  )}
                >
                  Pages
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    height={16}
                    className=" ml-1"
                  />
                </Link>
                {isDropdownOpen && (
                  <div className="absolute left-0 top-full h-10 w-full bg-transparent "></div>
                )}
                {isDropdownOpen && (
                  <ul
                    className="absolute left-[-24px] top-10  w-[16rem] bg-white shadow-lg rounded-[10px] z-50 p-[0] header-layout"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <li className="relative  border-b border-borderLight py-[6px]">
                      <Link
                        href="/pages/about"
                        className="block px-4 py-2 text-gray-700 hover:text-customBlue no-underline font-medium"
                        // onClick={() => {
                        //   setIsDropdownOpen(false);
                        //   router.push("/pages/about");
                        // }}
                      >
                        About
                      </Link>
                    </li>

                    <li
                      className="relative  border-b border-borderLight py-[6px]"
                      onMouseEnter={() => setProjectDropDownOpen(true)}
                      onMouseLeave={() => setProjectDropDownOpen(false)}
                    >
                      <Link
                        href="/pages/about"
                        className="block px-4 py-2 text-gray-700 hover:text-customBlue no-underline font-medium"
                      >
                        Projects
                        <FontAwesomeIcon
                          icon={faAngleDown}
                          height={16}
                          className={Styles.right_rotate}
                        />
                      </Link>
                      {projectDropDownOpen && (
                        <div className="absolute left-0 top-full h-10 w-full bg-transparent "></div>
                      )}
                      {projectDropDownOpen && (
                        <ul
                          className="absolute left-[220px] top-10  w-[14rem] bg-white shadow-lg rounded-md z-50 p-[0] header-layout"
                          onMouseEnter={() => setProjectDropDownOpen(true)}
                          onMouseLeave={() => setProjectDropDownOpen(false)}
                        >
                          <li className="relative  border-b border-borderLight py-[6px]">
                            <Link
                              href="/pages/projects/projectList"
                              className="block px-4 py-2 text-gray-700 hover:text-customBlue no-underline font-medium"
                            >
                              Project List
                            </Link>
                          </li>
                          <li className="relative  border-b border-borderLight py-[6px]">
                            <Link
                              href="/pages/projects/projectDetails"
                              className="block px-4 py-2 text-gray-700 hover:text-customBlue no-underline font-medium"
                            >
                              Project Details
                            </Link>
                          </li>
                        </ul>
                      )}
                    </li>

                    <li className="relative border-b border-borderLight py-[6px]">
                      <Link
                        href="/pages/team"
                        className="block px-4 py-2 text-gray-700 hover:hover:text-customBlue no-underline font-medium"
                      >
                        Team
                      </Link>
                    </li>

                    <li className="relative border-b border-borderLight py-[6px]">
                      <Link
                        href="/pages/service/serviceList"
                        className="block px-4 py-2 text-gray-700 hover:hover:text-customBlue no-underline font-medium"
                      >
                        Service
                      </Link>
                    </li>
                    <li className="relative border-b border-borderLight py-[6px]">
                      <Link
                        href="/pages/testimonials"
                        className="block px-4 py-2 text-gray-700 hover:hover:text-customBlue no-underline font-medium"
                      >
                        Testimonial
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link
                  href="/pages/service/serviceList"
                  className={clsx(
                    "hover:text-customBlue no-underline",
                    pathname === "/pages/service/serviceList"
                      ? "text-customBlue font-bold"
                      : "text-cutomText font-medium"
                  )}
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  href="/pages/news"
                  className={clsx(
                    "hover:text-customBlue no-underline",
                    pathname === "/pages/news"
                      ? "text-customBlue font-bold"
                      : "text-cutomText font-medium"
                  )}
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/contact"
                  className={clsx(
                    "hover:text-customBlue no-underline",
                    pathname === "/pages/contact"
                      ? "text-customBlue font-bold"
                      : "text-cutomText font-medium"
                  )}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
