import Image from "next/image";
import React from "react";
import Styles from "../../styles/header.module.css";

const Footer = () => {
  return (
    <div>
      <div className="flex bg-gray-50 justify-center items-center">
        <div className="w-1/3 bg-gray-50 text-black p-4 flex justify-center items-center">
          <Image
            src="https://uattfsec.truefinedge.com/image-pub/original.svg"
            alt="logo"
            width={200}
            height={100}
            priority
          />
        </div>
        <div className="w-2/3 bg-gray-50 text-black p-4">
          <ul className=" flex justify-center items-center  gap-8 cursor-pointer">
            <li className={Styles.header_nav}>Home</li>
            <li className={Styles.header_nav}>About</li>
            <li className={Styles.header_nav}>Pages</li>
            <li className={Styles.header_nav}>Service</li>
            <li className={Styles.header_nav}>News</li>
            <li className={Styles.header_nav}>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
