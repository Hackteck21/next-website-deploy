"use client";
import React from "react";
import Styles from "../../../styles/header.module.css";
import Image from "next/image";
import {
  // DataAnalysis,
  DigitalMarketing,
  Startup,
  Uxdesign,
} from "@/app/Icons/IconsExport";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
const ServiceList = () => {
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
              Services
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
              Services
            </div>
          </div>
        </motion.div>
      </section>
      <section className={Styles.service_overall_bg}>
        <div className={Styles.auto_container}>
          <motion.div
            className="w-[100%]  rounded-lg mb-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className=" text-center py-5">
              <div className=" text-customBlue text-[16] font-medium">
                What We Do
              </div>
              <div className=" text-[30px] font-extrabold">
                Provide the Best Consulting in This Industry
              </div>
            </div>
          </motion.div>

          <div className="row">
            <div className=" col-md-4 col-lg-4 col-sm-12 relative py-[50px] ">
              <motion.div
                className="w-[100%]  rounded-lg mb-10"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className={Styles.service_border_radius}>
                  <div className=" flex justify-center ">
                    <Image
                      src={Startup}
                      alt="startup"
                      priority
                      className={`${Styles.service_white_img} `}
                    />
                  </div>
                  <div className=" text-center">
                    <h1 className=" font-bold text-[18px] text-cutomText pt-4 px-4">
                      Product Development
                    </h1>
                    <div>
                      {" "}
                      <p className=" text-[16px] text-lightTextColor px-4 pt-2  leading-[30px]">
                        {`We’ve designed a culture that allows our stewards to
                    assimilate`}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className=" col-md-4 col-lg-4 col-sm-12 relative py-[50px] ">
              <motion.div
                className="w-[100%]  rounded-lg mb-10"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className={Styles.service_border_radius}>
                  <div className=" flex justify-center ">
                    <Image
                      src={Uxdesign}
                      alt="Uxdesign"
                      priority
                      className={`${Styles.service_white_img} `}
                    />
                  </div>
                  <div className=" text-center">
                    <h1 className=" font-bold text-[18px] text-cutomText pt-4 px-4">
                      UX Design
                    </h1>
                    <div>
                      {" "}
                      <p className=" text-[16px] text-lightTextColor px-4 pt-2  leading-[30px]">
                        {`We’ve designed a culture that allows our stewards to
                    assimilate`}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className=" col-md-4 col-lg-4 col-sm-12 relative py-[50px] ">
              <motion.div
                className="w-[100%]  rounded-lg mb-10"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className={Styles.service_border_radius}>
                  <div className=" flex justify-center ">
                    <Image
                      src={DigitalMarketing}
                      alt="DigitalMarketing"
                      priority
                      className={`${Styles.service_white_img} `}
                    />
                  </div>
                  <div className=" text-center">
                    <h1 className=" font-bold text-[18px] text-cutomText pt-4 px-4">
                      Web Development
                    </h1>
                    <div>
                      {" "}
                      <p className=" text-[16px] text-lightTextColor px-4 pt-2  leading-[30px]">
                        {`We’ve designed a culture that allows our stewards to
                    assimilate`}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      {/* <section>
        <div className={Styles.auto_container}>
          <div className="row py-[100px]">
            <div className="col-md-4 col-lg-4 col-sm-12">
              <div className=" border p-[10px] relative">
                <div>
                  <img
                    src="https://html.kodesolution.com/2024/sotech-php/images/resource/service-1.jpg"
                    className=" ml-[6px]"
                  />
                </div>
                <div>
                  <h1 className=" font-bold text-[18px] text-cutomText pt-4 px-4">
                    Product Development
                  </h1>
                  <p className=" text-[16px] text-lightTextColor px-4 pt-2  leading-[30px]">
                    {`We’ve designed a culture that allows our stewards to
                    assimilate`}
                  </p>
                  <div className=" absolute  bottom-[160px] left-[40px] rounded-md shadow-customeBrow  bg-customBlue">
                    <div>
                      <div className=" flex items-center p-[20px]">
                        <Image
                          src={Startup}
                          alt="startup"
                          priority
                          className={Styles.white_img}
                        />
                      </div>
                    </div>
                  </div>
                  <div className=" pt-2 px-4 text-[13px] font-bold uppercase text-lightTextColor tracking-[1px]">
                    Read More
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-12 relative">
              <div className=" border p-[10px]">
                <div>
                  <img
                    src="https://html.kodesolution.com/2024/sotech-php/images/resource/service-2.jpg"
                    className=" ml-[6px]"
                  />
                </div>
                <div className=" absolute  bottom-[160px] left-[40px] rounded-md shadow-customeBrow  bg-customBlue">
                  <div>
                    <div className=" flex items-center p-[20px]">
                      <Image
                        src={Uxdesign}
                        alt="startup"
                        priority
                        className={Styles.white_img}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <h1 className=" font-bold text-[18px] text-cutomText pt-4 px-4">
                    UI/UX Designing
                  </h1>
                  <p className=" text-[16px] text-lightTextColor px-4 pt-2  leading-[30px]">
                    {`We’ve designed a culture that allows our stewards to
                    assimilate`}
                  </p>
                  <div className=" pt-2 px-4 text-[13px] font-bold uppercase text-lightTextColor tracking-[1px]">
                    Read More
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-12 relative">
              <div className=" border p-[10px]">
                <div>
                  <img
                    src="https://html.kodesolution.com/2024/sotech-php/images/resource/service-3.jpg"
                    className=" ml-[6px]"
                  />
                </div>
                <div className=" absolute  bottom-[160px] left-[40px] rounded-md shadow-customeBrow  bg-customBlue">
                  <div>
                    <div className=" flex items-center p-[20px]">
                      <Image
                        src={DigitalMarketing}
                        alt="startup"
                        priority
                        className={Styles.white_img}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <h1 className=" font-bold text-[18px] text-cutomText pt-4 px-4">
                    Digital Marketing
                  </h1>
                  <p className=" text-[16px] text-lightTextColor px-4 pt-2  leading-[30px]">
                    {`We’ve designed a culture that allows our stewards to
                    assimilate`}
                  </p>
                  <div className=" pt-2 px-4 text-[13px] font-bold uppercase text-lightTextColor tracking-[1px]">
                    Read More
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-12 mt-5 relative">
              <div className=" border p-[10px]">
                <div>
                  <img
                    src="https://html.kodesolution.com/2024/sotech-php/images/resource/service-3.jpg"
                    className=" ml-[6px]"
                  />
                </div>
                <div className=" absolute  bottom-[160px] left-[40px] rounded-md shadow-customeBrow  bg-customBlue">
                  <div>
                    <div className=" flex items-center p-[20px]">
                      <Image
                        src={DataAnalysis}
                        alt="startup"
                        priority
                        className={Styles.white_img}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <h1 className=" font-bold text-[18px] text-cutomText pt-4 px-4">
                    Data Analysis
                  </h1>
                  <p className=" text-[16px] text-lightTextColor px-4 pt-2  leading-[30px]">
                    {`We’ve designed a culture that allows our stewards to
                    assimilate`}
                  </p>
                  <div className=" pt-2 px-4 text-[13px] font-bold uppercase text-lightTextColor tracking-[1px]">
                    Read More
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-12 mt-5 relative">
              <div className=" border p-[10px]">
                <div>
                  <img
                    src="https://html.kodesolution.com/2024/sotech-php/images/resource/service-1.jpg"
                    className=" ml-[6px]"
                  />
                </div>
                <div className=" absolute  bottom-[160px] left-[40px] rounded-md shadow-customeBrow  bg-customBlue">
                  <div>
                    <div className=" flex items-center p-[20px]">
                      <Image
                        src={DigitalMarketing}
                        alt="startup"
                        priority
                        className={Styles.white_img}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <h1 className=" font-bold text-[18px] text-cutomText pt-4 px-4">
                    Security System
                  </h1>
                  <p className=" text-[16px] text-lightTextColor px-4 pt-2  leading-[30px]">
                    {`We’ve designed a culture that allows our stewards to
                    assimilate`}
                  </p>
                  <div className=" pt-2 px-4 text-[13px] font-bold uppercase text-lightTextColor tracking-[1px]">
                    Read More
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-12 mt-5 relative">
              <div className=" border p-[10px]">
                <div>
                  <img
                    src="https://html.kodesolution.com/2024/sotech-php/images/resource/service-2.jpg"
                    className=" ml-[6px]"
                  />
                </div>
                <div className=" absolute  bottom-[160px] left-[40px] rounded-md shadow-customeBrow  bg-customBlue">
                  <div>
                    <div className=" flex items-center p-[20px]">
                      <Image
                        src={DataAnalysis}
                        alt="startup"
                        priority
                        className={Styles.white_img}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <h1 className=" font-bold text-[18px] text-cutomText pt-4 px-4">
                    Data Visualization
                  </h1>
                  <p className=" text-[16px] text-lightTextColor px-4 pt-2  leading-[30px]">
                    {`We’ve designed a culture that allows our stewards to
                    assimilate`}
                  </p>
                  <div className=" pt-2 px-4 text-[13px] font-bold uppercase text-lightTextColor tracking-[1px]">
                    Read More
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default ServiceList;
