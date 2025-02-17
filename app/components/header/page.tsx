import Image from "next/image";
import React from "react";
import Styles from "../../styles/header.module.css";

const page = () => {
  return (
    <div>
      <div className="flex bg-gray-50 justify-center items-center">
        <div className="w-1/3 bg-gray-50 text-black p-4 flex justify-center items-center">
          <Image
            src="https://uattfsec.truefinedge.com/image-pub/original.svg"
            alt="logo"
            width={200} // Set your desired width
            height={100} // Set your desired height
            priority // Ensures faster loading
          />
        </div>
        <div className="w-2/3 bg-gray-50 text-black p-4">
          <ul className=" flex justify-center items-center  gap-4">
            <li>Home</li>
            <li>About</li>
            <li>Pages</li>
            <li>Service</li>
            <li>News</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className={Styles.overall_banner}>
        <div className={Styles.banner}></div>
      </div>
      <div className="bg-gray-50">
        <div className=" text-center py-11">
          <div className="font-bold text-red-500">Feature</div>
          <div className=" font-bold text-4xl">
            Professional And Dedicated <div>Consulting Solutions.</div>
          </div>
        </div>
        <div className="flex gap-4 px-10">
          <div className="w-1/3 bg-gray-500 text-black p-4 flex justify-center items-center rounded-md">
            <div className=" text-center">
              <div className=" text-white text-lg font-bold">
                Business planing
              </div>
              <div className=" text-gray-300 font-medium">
                Amet minim mollit no duis sit{" "}
                <div>enim aliqua dolor do amet officia.</div>
              </div>
            </div>
          </div>
          <div className="w-1/3 bg-gray-500 text-black p-4 flex justify-center items-center rounded-md">
            <div className=" text-center">
              <div className=" text-white text-lg font-bold">Tax Strategy</div>
              <div className=" text-gray-300 font-medium">
                Amet minim mollit no duis sit{" "}
                <div>enim aliqua dolor do amet officia.</div>
              </div>
            </div>
          </div>
          <div className="w-1/3 bg-gray-500 text-black p-4 flex justify-center items-center rounded-md">
            <div className=" text-center">
              <div className=" text-white text-lg font-bold">
                Business Intelligence
              </div>
              <div className=" text-gray-300 font-medium">
                Amet minim mollit no duis sit{" "}
                <div>enim aliqua dolor do amet officia.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
