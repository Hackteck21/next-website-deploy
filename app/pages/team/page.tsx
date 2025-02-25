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
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
};

const TeamList = () => {
  return (
    <div>
      <section className={Styles.about_banner}>
        <div className={Styles.auto_container}>
          <div className="text-[60px] font-extrabold text-white relative z-10">
            Team Grid
          </div>
          <div className="text-white relative">{`Home > Pages > Team Grid`}</div>
        </div>
      </section>
      <section className="pb-[140px]">
        <div className={Styles.auto_container}>
          <div className=" py-10">
            <h1 className=" font-bold text-[30px] text-center tracking-[2px] capitalize">
              Meet Our Expert{" "}
              <span className=" text-customBlue">team member</span> will ready
              <div>for your service</div>
            </h1>
          </div>
          <div className="row">
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
                    <div className=" font-bold text-[16px] uppercase pb-2">
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
                    <div className=" font-bold text-[16px] uppercase pb-2">
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
                    <div className=" font-bold text-[16px] uppercase pb-2">
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
                    <div className=" font-bold text-[16px] uppercase pb-2">
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
                    <div className=" font-bold text-[16px] uppercase pb-2">
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamList;
