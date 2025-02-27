"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Styles from "../../styles/header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Ellipse1 from "../../assets/images/bg/Ellipse-1.svg";
import Ellipse2 from "../../assets/images/bg/Ellipse-2.svg";
import Ellipse3 from "../../assets/images/bg/Ellipse-3.svg";
import Ellipse4 from "../../assets/images/bg/Ellipse-4.svg";
import {
  faFacebook,
  faInstagram,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAddressBook,
  faArrowUp,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const [showGoTop, setShowGoTop] = useState(false);

  // const handleVisibleButton = () => {
  //   setShowGoTop(window.pageYOffset > 50);
  // };

  // const handleScrollUp = () => {
  //   window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleVisibleButton);
  // }, []);

  const handleVisibleButton = () => {
    setShowGoTop(window.scrollY > 50); // ✅ Replaced pageYOffset with scrollY
  };

  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);

    // Cleanup event listener
    return () => {
      window.removeEventListener("scroll", handleVisibleButton);
    };
  }, []);

  return (
    <section className="relative">
      {showGoTop && (
        <div
          className="scroll-arrow-up cursor-pointer"
          onClick={() => handleScrollUp()}
        >
          <FontAwesomeIcon icon={faArrowUp} className="text-white h-[16px]" />
        </div>
      )}

      <div>
        <div>
          <div>
            <Image
              src={Ellipse1}
              alt="ellipse"
              priority
              className=" absolute top-0"
            />
          </div>
          <div>
            <Image
              src={Ellipse2}
              alt="ellipse"
              priority
              className=" absolute top-0"
            />
          </div>
        </div>
      </div>
      <div className=" bg-slate-400">
        <div className={Styles.footer}>
          <div className={Styles.auto_container}>
            <div className="row">
              <div className="col-md-3 pb-[16px]">
                <div>
                  <Image
                    src="https://uattfsec.truefinedge.com/image-pub/original.svg"
                    alt="logo"
                    width={200}
                    height={100}
                    priority
                    className="mt-[-18px]"
                  />
                  <div className={Styles.footer_logo_info}>
                    {`We're a global team of strategic digital collaborating with 
                      some of the world's largest brands.`}
                  </div>
                  <div className="pl-0 py-2">
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
                </div>
              </div>
              <div className="col-md-3">
                <div>
                  <div className="text-[18px] text-white font-bold  pb-2">
                    <span className="border-b-2 border-white"> Explore</span>
                  </div>
                  <ul className={Styles.footer_list}>
                    <li>
                      <a href="#">About Company</a>
                    </li>
                    <li>
                      <a href="#">Meet the Team</a>
                    </li>
                    <li>
                      <a href="#">News & Media</a>
                    </li>
                    <li>
                      <a href="#">Our Projects</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className=" text-[18px] text-white font-bold  pb-2">
                  <span className="border-b-2 border-white"> Contact</span>
                </div>
                <div>
                  <ul className={Styles.footer_list}>
                    <li>
                      <FontAwesomeIcon icon={faAddressBook} className=" mr-1" />
                      66 Road Broklyn Street, 600 New York, USA
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faEnvelope} className=" mr-1" />{" "}
                      needhelp@company.com
                    </li>
                    <li>
                      <div>
                        <FontAwesomeIcon icon={faPhone} className=" mr-1" />
                        +92 666 888 0000
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className=" text-center border-t mt-[50px]">
            <p className=" py-[20px]">© 2024 Codetrix Technologies Pvt. Ltd.</p>
          </div>
        </div>
      </div>
      <div className=" ">
        <div>
          <Image
            src={Ellipse3}
            alt="ellipse"
            priority
            className=" absolute top-0 right-0"
          />
        </div>
        <div>
          <Image
            src={Ellipse4}
            alt="ellipse"
            priority
            className=" absolute top-0 right-0"
          />
        </div>
      </div>
      {/* Copy rights */}
    </section>
  );
};

export default Footer;
