import React from "react";
import Styles from "../../styles/header.module.css";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { About, Profile, Startup } from "@/app/Icons/IconsExport";

const page = () => {
  return (
    <div>
      <section className={Styles.about_banner}>
        <div className={Styles.auto_container}>
          <div className="text-[60px] font-extrabold text-white relative z-10">
            About Us
          </div>
        </div>
      </section>
      <section className=" py-[80px]">
        <div className={Styles.auto_container}>
          <div className="row ">
            <div className="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 order-lg-2 wow fadeInRight animated relative">
              <div className={Styles.banner_2}></div>
              <div className=" absolute  bottom-[70px] left-[-100px] rounded-md shadow-customeBrow  bg-customBlue">
                <div>
                  <div className=" flex items-center p-[30px]">
                    <Image
                      src={Startup}
                      alt="startup"
                      priority
                      className={Styles.white_img}
                    />
                    <div className="ml-4 font-bold text-[24px] text-white">
                      30+{" "}
                      <div className=" text-[16px] font-medium">
                        {" "}
                        Years of experience
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" absolute top-[70px] right-0 rounded-md shadow-customeBrow border-4 border-white">
                <Image src={About} alt="about" />
              </div>
            </div>
            <div className=" content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 order-lg-2 wow fadeInRight animated pl-70">
              <div className=" text-[16px] font-bold text-customBlue pb-4">
                WHO WE ARE _____
              </div>
              <div className=" text-[50px] font-bold leading-[60px] pb-5  mr-20">
                We provide best design Solution in town
              </div>
              <p className=" text-[16px]  font-normal text-customBrown leading-2 pb-4">
                We provide a diverse array of systems, each tailored to
                streamline your operations and enhance productivity. Whether you
                require assistance with data process automation need.
              </p>
              <div>
                <div className=" flex items-center pb-2">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    height={16}
                    className=" text-customBlue"
                  />{" "}
                  <div className=" ml-2 font-medium text-[16px]">
                    Deliver Perfect Solution for business
                  </div>
                </div>
                <div className=" flex items-center pb-2">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    height={16}
                    className=" text-customBlue"
                  />{" "}
                  <div className=" ml-2 font-medium text-[16px]">
                    Deliver Perfect Solution for business
                  </div>
                </div>
                <div className=" flex items-center pb-2">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    height={16}
                    className=" text-customBlue"
                  />{" "}
                  <div className=" ml-2 font-medium text-[16px]">
                    Deliver Perfect Solution for business
                  </div>
                </div>
              </div>
              <div className=" flex justify-between items-center pt-4">
                <div className=" flex items-center">
                  <Image
                    src={Profile}
                    alt="profile"
                    className="border-2 w-[80px] h-[80px] rounded-[50%]"
                  />
                  <div className=" ml-3">
                    <div className=" font-bold text-[16px]">Jessica brown</div>
                    <div className=" font-medium text-customBrown text-[14px]">
                      Founder of company
                    </div>
                  </div>
                </div>

                <div>
                  <button className=" bg-customBlue py-3 px-5 font-bold text-[12px] uppercase text-white">
                    Explore Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
