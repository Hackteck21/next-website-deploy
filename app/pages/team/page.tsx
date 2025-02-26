"use client";
import React from "react";
import Styles from "../../styles/header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Person1 from "../../assets/images/bg/p1.jpg";
import Person2 from "../../assets/images/bg/p2.jpg";
import Person3 from "../../assets/images/bg/p3.jpg";
import Person4 from "../../assets/images/bg/p4.jpg";
import Person5 from "../../assets/images/bg/p5.jpg";

import Slider from "react-slick";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";

const TeamList = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };
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
              Team Grid
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
              Team Grid
            </div>
          </div>
        </motion.div>
      </section>
      <section className="pb-[140px]">
        <div className={Styles.auto_container}>
          <motion.div
            className="w-[100%]  rounded-lg mb-10"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className=" py-10">
              <h1 className=" font-bold text-[30px] text-center tracking-[2px] capitalize text-black">
                Meet Our Expert{" "}
                <span className=" text-customBlue">team member</span> will ready
                <div>for your service</div>
              </h1>
            </div>
          </motion.div>

          <div className="row">
            <motion.div
              className="w-[100%]  rounded-lg mb-10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Slider {...settings}>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className=" relative mr-4">
                    <div>
                      <Image
                        src={Person1}
                        alt="Personal"
                        priority
                        className=" h-[500px]"
                      />
                    </div>
                    <div className={Styles.team_card}>
                      <div className=" font-bold text-[16px] uppercase pb-2 text-customBlackText">
                        Kevin Martin
                      </div>
                      <div className=" font-medium text-[14px] uppercase text-lightTextColor">
                        Designer
                      </div>
                      <div className={Styles.overall_team}>
                        <ul className={Styles.team_list}>
                          <li>
                            <FontAwesomeIcon icon={faTwitter} />
                          </li>
                          <li>
                            <FontAwesomeIcon icon={faFacebook} />
                          </li>
                          <li>
                            <FontAwesomeIcon icon={faInstagram} />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className=" relative mr-4">
                    <div>
                      <Image
                        src={Person2}
                        alt="Personal"
                        priority
                        className=" h-[500px]"
                      />
                    </div>
                    <div className={Styles.team_card}>
                      <div className=" font-bold text-[16px] uppercase pb-2 text-customBlackText">
                        Aleesha Brown
                      </div>
                      <div className=" font-medium text-[14px] uppercase text-lightTextColor">
                        Co founder
                      </div>
                      <div className={Styles.overall_team}>
                        <ul className={Styles.team_list}>
                          <li>
                            <FontAwesomeIcon icon={faTwitter} />
                          </li>
                          <li>
                            <FontAwesomeIcon icon={faFacebook} />
                          </li>
                          <li>
                            <FontAwesomeIcon icon={faInstagram} />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className=" relative mr-4">
                    <div>
                      <Image
                        src={Person3}
                        alt="Personal"
                        priority
                        className=" h-[500px]"
                      />
                    </div>
                    <div className={Styles.team_card}>
                      <div className=" font-bold text-[16px] uppercase pb-2 text-customBlackText">
                        Sarah Albert
                      </div>
                      <div className=" font-medium text-[14px] uppercase text-lightTextColor">
                        Developer
                      </div>
                      <div className={Styles.overall_team}>
                        <ul className={Styles.team_list}>
                          <li>
                            <FontAwesomeIcon icon={faTwitter} />
                          </li>
                          <li>
                            <FontAwesomeIcon icon={faFacebook} />
                          </li>
                          <li>
                            <FontAwesomeIcon icon={faInstagram} />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className=" relative mr-4">
                    <div>
                      <Image
                        src={Person4}
                        alt="Personal"
                        priority
                        className=" h-[500px]"
                      />
                    </div>
                    <div className={Styles.team_card}>
                      <div className=" font-bold text-[16px] uppercase pb-2 text-customBlackText">
                        Aleesha Brown
                      </div>
                      <div className=" font-medium text-[14px] uppercase text-lightTextColor">
                        Co founder
                      </div>
                      <div className={Styles.overall_team}>
                        <ul className={Styles.team_list}>
                          <li>
                            <FontAwesomeIcon icon={faTwitter} />
                          </li>
                          <li>
                            <FontAwesomeIcon icon={faFacebook} />
                          </li>
                          <li>
                            <FontAwesomeIcon icon={faInstagram} />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className=" relative mr-4">
                    <div>
                      <Image
                        src={Person5}
                        alt="Personal"
                        priority
                        className=" h-[500px]"
                      />
                    </div>
                    <div className={Styles.team_card}>
                      <div className=" font-bold text-[16px] uppercase pb-2 text-customBlackText">
                        Aleesha Brown
                      </div>
                      <div className=" font-medium text-[14px] uppercase text-lightTextColor">
                        Co founder
                      </div>
                      <div className={Styles.overall_team}>
                        <ul className={Styles.team_list}>
                          <li>
                            <FontAwesomeIcon icon={faTwitter} />
                          </li>
                          <li>
                            <FontAwesomeIcon icon={faFacebook} />
                          </li>
                          <li>
                            <FontAwesomeIcon icon={faInstagram} />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamList;
