import React from "react";
import Styles from "../../styles/header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleRight,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div>
      <section className={Styles.about_banner}>
        <div className={Styles.auto_container}>
          <div className="text-[60px] font-extrabold text-white relative z-10">
            Contact
          </div>
          <div className="text-white relative">
            Home{" "}
            <span>
              <FontAwesomeIcon icon={faChevronCircleRight} className=" mx-2" />
            </span>
            Pages
            <span>
              <FontAwesomeIcon icon={faChevronCircleRight} className=" mx-2" />
            </span>
            Contacts
          </div>
        </div>
      </section>
      <section>
        <div className={Styles.auto_container}>
          <div className="row py-[90px]">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div>
                <div className="text-[13px] font-bold text-customBlue uppercase">
                  Send us email
                </div>
                <div className=" font-bold text-[40px] text-customBlackText">
                  Feel free to write
                </div>
              </div>
              <div className="py-[40px]">
                <div className="row">
                  <div className="col-md-6">
                    <input
                      placeholder="Enter Name"
                      className={Styles.input_field}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      placeholder="Enter Email"
                      className={Styles.input_field}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      placeholder="Enter Subject"
                      className={Styles.input_field}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      placeholder="Enter Phone"
                      className={Styles.input_field}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 col-lg-12 col-sm-12">
                    <textarea
                      placeholder="Enter Message"
                      className={Styles.text_area}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 col-lg-6 col-sm-4 mb-4">
                    <div className={Styles.send_message}>
                      <button className=" uppercase">Send Message</button>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4 col-sm-4">
                    <div className={Styles.send_message}>
                      <button className=" uppercase">Reset</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" col-lg-6 col-md-6 col-sm-12">
              <div>
                <div className="text-[13px] font-bold text-customBlue uppercase">
                  Send us email
                </div>
                <div className=" font-bold text-[40px] text-customBlackText">
                  Get in touch with us
                </div>
              </div>
              <p className="py-[40px] leading-[26px] text-lightTextColor">
                Lorem ipsum is simply free text available dolor sit amet,
                consectetur notted adipisicing elit sed do eiusmod tempor
                incididunt simply free ut labore et dolore magna aliqua.
              </p>
              <div>
                <div className="flex">
                  <div>
                    <FontAwesomeIcon
                      icon={faPhone}
                      className={Styles.contact_phone}
                    />
                  </div>
                  <div className=" ml-10">
                    <div className=" font-bold text-[16px] pb-2 text-customBlackText">
                      Have any question
                    </div>
                    <div className=" font-medium text-[14px]  text-lightTextColor">
                      Free +92 (020)-9850
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div>
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className={Styles.contact_phone}
                    />
                  </div>
                  <div className=" ml-10">
                    <div className=" font-bold text-[16px]  pb-2 text-customBlackText">
                      Write email
                    </div>
                    <div className=" font-medium text-[14px]  text-lightTextColor">
                      needhelp@company.com
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div>
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className={Styles.contact_phone}
                    />
                  </div>
                  <div className=" ml-10">
                    <div className=" font-bold text-[16px]  pb-2 text-customBlackText">
                      Visit anytime
                    </div>
                    <div className=" font-medium text-[14px]  text-lightTextColor">
                      Chennai,Tamil Nadu
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
