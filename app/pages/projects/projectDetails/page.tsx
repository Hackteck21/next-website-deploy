"use client";
import React from "react";
import Styles from "../../../styles/header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import {
  faFacebook,
  faInstagram,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";

const ProjectDetails = () => {
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
              Project Details
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
              Project Details
            </div>
          </div>
        </motion.div>
      </section>
      <section className=" py-[80px]">
        <div className={Styles.auto_container}>
          <img src="https://html.kodesolution.com/2024/sotech-php/images/resource/project-details.jpg" alt="ddd"/>
          <div className="row py-6">
            <div className="col-md-8 col-xl-8 col-lg-8">
              <motion.div
                className="w-[100%]  rounded-lg mb-10"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h1 className=" font-bold text-[24px] text-customBlackText">
                  Here to Know About This Project
                </h1>
              </motion.div>
              <motion.div
                className="w-[100%]  rounded-lg mb-10"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <p className=" text-lightTextColor font-[400] text-[15px] leading-[30px]">
                  {`There are many variations of passages of psum available, but the
                majority have suffered alteration in some form, by injected
                humour, or randomised words which don't look even slightly
                believable. If you are going to use a passage of Lorem Ipsum,
                you need to be sure there isn't anything embarrassing hidden in
                the middle of text. Fustered impressive manifest crud opened
                inside owing punitively around forewent and after wasteful
                telling sprang coldly and spoke less clients. Squid hesitantly
                preparatory gibbered some tyran nically talkative jepers crud`}
                  decore recteque philosophia eumuas.
                </p>
              </motion.div>
              <motion.div
                className="w-[100%]  rounded-lg mb-10"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <p className=" text-lightTextColor font-[400] text-[15px] leading-[30px]">
                  {` Beyond more stoic this along goodness hey this this wow manatee
                mongoose one as since a far flustered impressive manifest far
                crud opened inside owing punitively around forewent and after
                wasteful telling sprang coldly and spoke less clients. Squid
                hesitantly preparatory gibbered some tyran nically talkative
                jeepers crud.`}
                </p>
              </motion.div>
              <motion.div
                className="w-[100%]  rounded-lg mb-10"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h1 className=" font-bold text-[24px] pb-2 pt-4 text-customBlackText">
                  Project Challenges
                </h1>
              </motion.div>
              <motion.div
                className="w-[100%]  rounded-lg mb-10"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <p className=" text-lightTextColor font-[400] text-[15px] leading-[30px]">
                  {`Eque porro est qui dolorem ipsum quia quaed inventore veritatis
                et quasi architecto beatae vitae dicta sunt explicabo. Aelltes
                port lacus quis enim var sed efficitur turpis gilla sed sit amet
                finibus eros. Lorem Ipsum is simply dummy text of the printing
                and typesetting.`}
                </p>
              </motion.div>
              <motion.div
                className="w-[100%]  rounded-lg mb-10"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h1 className=" font-bold text-[24px] pb-2 pt-4 text-customBlackText">
                  Organic Food Supply
                </h1>
              </motion.div>
              <motion.div
                className="w-[100%]  rounded-lg mb-10"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <p className=" text-lightTextColor font-[400] text-[15px] leading-[30px]">
                  {`When an unknown printer took a galley of type and scrambled it
                to make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s
                with the release of Letraset sheets containing. Neque porro est
                qui dolorem ipsumo.`}
                </p>
              </motion.div>
            </div>
            <div className="col-xl-4 col-lg-4">
              <div>
                <div className=" bg-cardbg px-[30px] py-[20px] rounded-md">
                  <motion.div
                    className="w-[100%]  rounded-lg mb-10"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <div className=" py-3">
                      <div className=" text-lightTextColor font-medium text-[15px] ">
                        Date
                      </div>
                      <div className="text-black font-bold text-[15px]">
                        22 April, 2024
                      </div>
                    </div>
                    <div className=" py-3">
                      <div className=" text-lightTextColor font-medium text-[15px] ">
                        Client
                      </div>
                      <div className="text-black font-bold text-[15px]">
                        TrueFinedge
                      </div>
                    </div>
                    <div className=" py-3">
                      <div className=" text-lightTextColor font-medium text-[15px] ">
                        Website
                      </div>
                      <div className="text-black font-bold text-[15px]">
                        www.truefinedge.com
                      </div>
                    </div>
                    <div className=" py-3">
                      <div className=" text-lightTextColor font-medium text-[15px] ">
                        Location
                      </div>
                      <div className="text-black font-bold text-[15px]">
                        Chennai,India
                      </div>
                    </div>
                    <div className=" py-3">
                      <div className=" text-lightTextColor font-medium text-[15px] ">
                        Value
                      </div>
                      <div className="text-black font-bold text-[15px]">
                        $11,367
                      </div>
                    </div>
                    <div className="py-3">
                      <div className=" text-lightTextColor font-medium text-[15px]">
                        <ul className={Styles.project_details}>
                          <li>
                            <FontAwesomeIcon icon={faTwitter} />
                          </li>
                          <li>
                            <FontAwesomeIcon icon={faFacebook} />
                          </li>
                          <li>
                            <FontAwesomeIcon icon={faInstagram} />
                          </li>
                          <li>
                            <FontAwesomeIcon icon={faPinterest} />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;
