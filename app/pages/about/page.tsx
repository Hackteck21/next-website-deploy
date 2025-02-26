"use client";
import React from "react";
import Styles from "../../styles/header.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { Profile, Startup } from "@/app/Icons/IconsExport";
import Presentation from "../../assets/images/bg/presentation.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div>
      <section className={Styles.about_banner}>
        <motion.div
          className="w-[100%]  rounded-lg mb-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className={Styles.auto_container}>
            <div className="text-[60px] font-extrabold text-white relative z-10">
              Abouts
            </div>
            <div className="text-white relative">
              Home{" "}
              <span>
                <FontAwesomeIcon
                  icon={faChevronCircleRight}
                  className=" mx-2"
                />
              </span>
              Pages
              <span>
                <FontAwesomeIcon
                  icon={faChevronCircleRight}
                  className=" mx-2"
                />
              </span>
              Abouts
            </div>
          </div>
        </motion.div>
      </section>

      <section className=" py-[80px]">
        <div className={Styles.auto_container}>
          <motion.div
            className="w-[100%]  rounded-lg mb-10"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="row ">
              <div className="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 order-lg-2 wow fadeInRight animated relative">
                <div className={Styles.banner_left_2}>
                  <div className="about-page">
                    <Image
                      src={Presentation}
                      alt="ff"
                      priority
                      className=" h-[600px] w-[500px]"
                    />
                  </div>
                </div>

                <div className=" absolute top-[160px] right-0 rounded-md shadow-customeBrow  bg-customBlue">
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
              </div>
              <div className=" content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 order-lg-2 wow fadeInRight animated pl-70">
                <div className=" text-[16px] font-bold text-customBlue pb-4">
                  WHO WE ARE _____
                </div>
                <div className=" text-[50px] font-bold leading-[60px] pb-5  mr-20 text-customBlackText">
                  We provide best design Solution in town
                </div>
                <p className=" text-[16px]  font-normal text-customBrown leading-2 pb-4">
                  We provide a diverse array of systems, each tailored to
                  streamline your operations and enhance productivity. Whether
                  you require assistance with data process automation need.
                </p>
                <div>
                  <div className=" flex items-center pb-2">
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      height={16}
                      className=" text-customBlue"
                    />{" "}
                    <div className=" ml-2 font-medium text-[16px] text-lightTextColor">
                      Deliver Perfect Solution for business
                    </div>
                  </div>
                  <div className=" flex items-center pb-2">
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      height={16}
                      className=" text-customBlue"
                    />{" "}
                    <div className=" ml-2 font-medium text-[16px] text-lightTextColor">
                      Deliver Perfect Solution for business
                    </div>
                  </div>
                  <div className=" flex items-center pb-2">
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      height={16}
                      className=" text-customBlue"
                    />{" "}
                    <div className=" ml-2 font-medium text-[16px] text-lightTextColor">
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
                      <div className=" font-bold text-[16px] text-customBlackText">
                        Jessica brown
                      </div>
                      <div className=" font-medium text-customBrown text-[14px]">
                        Founder of company
                      </div>
                    </div>
                  </div>

                  <div>
                    <button className=" bg-customBlue py-3 px-5 font-bold text-[12px] uppercase text-white transition-all duration-300 ease-in-out transform hover:bg-btnHover hover:translate-y-1 shadow-md hover:shadow-lg">
                      Explore Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
