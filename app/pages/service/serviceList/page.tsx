"use client";
import React from "react";
import Styles from "../../../styles/header.module.css";
import Image from "next/image";
import {
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
              <div className=" text-[30px] font-extrabold text-customBlackText">
                Provide the Best Consulting in This Industry
              </div>
            </div>
          </motion.div>

          <div className="row pb-10">
            <div className=" col-md-4 col-lg-4 col-sm-12 relative  ">
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

            <div className=" col-md-4 col-lg-4 col-sm-12 relative  ">
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
            <div className=" col-md-4 col-lg-4 col-sm-12 relative  ">
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
    </div>
  );
};

export default ServiceList;
