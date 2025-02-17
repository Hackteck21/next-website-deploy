import Image from "next/image";
import React from "react";
import Styles from "../../styles/header.module.css";
import service1 from "../../assets/images/service-1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRectangleList,
  faSackDollar,
  faMoneyBillTrendUp,
} from "@fortawesome/free-solid-svg-icons";

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
      <div className={Styles.overall_banner}>
        <section className=" relative">
          <div className={Styles.banner}></div>
          <div className=" text-white text-[60px] text-center font-bold absolute top-0 left-0 right-0 py-[160px]">
            Our Services
          </div>
        </section>
      </div>
      <div className="">
        <div className=" text-center py-11">
          <div className="font-bold text-red-500">Feature</div>
          <div className=" font-bold text-4xl">
            Professional And Dedicated <div>Consulting Solutions.</div>
          </div>
        </div>
        <div className="flex gap-4 px-[15rem] pb-[100px]">
          <div className="w-1/3 text-black  flex justify-center items-center rounded-md relative">
            <div>
              <Image
                src={service1}
                alt="logo"
                priority // Ensures faster loading
                className=" rounded-md"
              />
            </div>

            <div
              className={`${Styles.boxshow_card} absolute right-2 bottom-[-80px] rounded-md bg-white p-[20px]`}
            >
              <div className=" bg-red-700 rounded-[50%] absolute top-[-44px] left-[-32px] p-[15px] text-white">
                <div className=" h-[42px] w-[42px]">
                  <FontAwesomeIcon icon={faRectangleList} />
                </div>
              </div>
              <div className=" font-bold text-[20px] mb-3 py-3">
                Strategy & Planning
              </div>
              <div className="text-gray-300 font-medium">
                Amet minim mollit no duis sit{" "}
                <div>enim aliqua dolor do amet officia.</div>
              </div>
            </div>
          </div>
          <div className="w-1/3 text-black  flex justify-center items-center rounded-md relative">
            <div>
              <Image
                src={service1}
                alt="logo"
                priority // Ensures faster loading
                className=" rounded-md"
              />
            </div>

            <div
              className={`${Styles.boxshow_card} absolute right-2 bottom-[-80px] rounded-md bg-white p-[20px] `}
            >
              <div className=" bg-red-700 rounded-[50%] absolute top-[-44px] left-[-32px] p-[15px] text-white">
                <div className=" h-[42px] w-[42px]">
                  <FontAwesomeIcon icon={faRectangleList} />
                </div>
              </div>
              <div className=" font-bold text-[20px] mb-3 py-3">
                Program Manager
              </div>
              <div className="text-gray-300 font-medium">
                Amet minim mollit no duis sit{" "}
                <div>enim aliqua dolor do amet officia.</div>
              </div>
            </div>
          </div>
          <div className="w-1/3 text-black  flex justify-center items-center rounded-md relative">
            <div>
              <Image
                src={service1}
                alt="logo"
                priority // Ensures faster loading
                className=" rounded-md"
              />
            </div>

            <div
              className={`${Styles.boxshow_card} absolute right-2 bottom-[-80px] rounded-md bg-white p-[20px] `}
            >
              <div className=" bg-red-700 rounded-[50%] absolute top-[-44px] left-[-32px] p-[15px] text-white">
                <div className=" h-[42px] w-[42px]">
                  <FontAwesomeIcon icon={faSackDollar} />
                </div>
              </div>
              <div className=" font-bold text-[20px] mb-3 py-3">
                Tax Management
              </div>
              <div className="text-gray-300 font-medium">
                Amet minim mollit no duis sit{" "}
                <div>enim aliqua dolor do amet officia.</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 px-[15rem] pb-[100px]">
          <div className="w-1/3 text-black  flex justify-center items-center rounded-md relative">
            <div>
              <Image
                src={service1}
                alt="logo"
                priority // Ensures faster loading
                className=" rounded-md"
              />
            </div>

            <div
              className={`${Styles.boxshow_card} absolute right-2 bottom-[-80px] rounded-md bg-white p-[20px] `}
            >
              <div className=" bg-red-700 rounded-[50%] absolute top-[-44px] left-[-32px] p-[15px] text-white">
                <div className=" h-[42px] w-[42px]">
                  <FontAwesomeIcon icon={faMoneyBillTrendUp} />
                </div>
              </div>
              <div className=" font-bold text-[20px] mb-3 py-3">
                Invetsment Policy
              </div>
              <div className="text-gray-300 font-medium">
                Amet minim mollit no duis sit{" "}
                <div>enim aliqua dolor do amet officia.</div>
              </div>
            </div>
          </div>
          <div className="w-1/3 text-black  flex justify-center items-center rounded-md relative">
            <div>
              <Image
                src={service1}
                alt="logo"
                priority // Ensures faster loading
                className=" rounded-md"
              />
            </div>

            <div
              className={`${Styles.boxshow_card} absolute right-2 bottom-[-80px] rounded-md bg-white p-[20px] `}
            >
              <div className=" bg-red-700 rounded-[50%] absolute top-[-44px] left-[-32px] p-[15px] text-white">
                <div className=" h-[42px] w-[42px]">
                  <FontAwesomeIcon icon={faRectangleList} />
                </div>
              </div>
              <div className=" font-bold text-[20px] mb-3 py-3">
                Financial Advices
              </div>
              <div className="text-gray-300 font-medium">
                Amet minim mollit no duis sit{" "}
                <div>enim aliqua dolor do amet officia.</div>
              </div>
            </div>
          </div>
          <div className="w-1/3 text-black  flex justify-center items-center rounded-md relative">
            <div>
              <Image
                src={service1}
                alt="logo"
                priority // Ensures faster loading
                className=" rounded-md"
              />
            </div>
            <div
              className={`${Styles.boxshow_card} absolute right-2 bottom-[-80px] rounded-md bg-white p-[20px] `}
            >
              <div className=" bg-red-700 rounded-[50%] absolute top-[-44px] left-[-32px] p-[15px] text-white">
                <div className=" h-[42px] w-[42px]">
                  <FontAwesomeIcon icon={faRectangleList} />
                </div>
              </div>
              <div className=" font-bold text-[20px] mb-3 py-3">
                Insurance Strategy
              </div>
              <div className="text-gray-300 font-medium">
                Amet minim mollit no duis sit{" "}
                <div>enim aliqua dolor do amet officia.</div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${Styles.banner_2} flex`}>
          <div className="w-1/2 bg-gray-50 text-black  flex justify-center items-center">
            <div className={Styles.left_side_reason}></div>
          </div>
          <div className="w-1/2 bg-gray-50 text-black">
            <div className="py-10 pl-[100px]">
              <div className=" text-lg font-bold text-red-700">
                Why Choose Codetrix
              </div>
              <div className=" text-black text-[24px] font-bold">
                Reason For Choosing Our Consultancy
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
