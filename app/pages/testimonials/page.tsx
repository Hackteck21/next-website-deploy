"use client";
import React from "react";
import Styles from "../../styles/header.module.css";
import {
  TestMonials1,
  TestMonials2,
  TestMonials3,
} from "@/app/Icons/IconsExport";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Ellipse1 from "../../assets/images/bg/Ellipse-1.svg";
import Ellipse2 from "../../assets/images/bg/Ellipse-2.svg";
import Ellipse3 from "../../assets/images/bg/Ellipse-3.svg";
import Ellipse4 from "../../assets/images/bg/Ellipse-4.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar } from "@fortawesome/free-solid-svg-icons";
const Testimonials = () => {
  const pathname = usePathname();

  return (
    <div>
      {pathname === "/pages/testimonials" && (
        <section className={Styles.about_banner}>
          <div className={Styles.auto_container}>
            <div className="text-[60px] font-extrabold text-white relative z-10 ">
              Testimonial
            </div>
            <div className="text-white relative flex items-center">
              Home
              <span>
                <FontAwesomeIcon
                  icon={faChevronCircleRight}
                  className=" mx-2 h-[16px]"
                />
              </span>
              Pages
              <span>
                <FontAwesomeIcon
                  icon={faChevronCircleRight}
                  className=" mx-2 h-[16px]"
                />
              </span>
              Testimonial
            </div>
          </div>
        </section>
      )}

      <section className={`${Styles.service_overall_bg} relative`}>
        {pathname !== "/pages/testimonials" && (
          <h1 className=" text-center font-bold text-[40px] pt-10 text-customBlackText">
            Testimonials
          </h1>
        )}
        <div>
          <div>
            <Image
              src={Ellipse1}
              alt="ellipse"
              priority
              className=" absolute top-0 testimonials-circle-design-1"
            />
          </div>
          <div>
            <Image
              src={Ellipse2}
              alt="ellipse"
              priority
              className=" absolute top-0 testimonials-circle-design-2"
            />
          </div>
        </div>

        <div className={Styles.auto_container}>
          <div className=" row pb-[160px] pt-[100px]">
            <div className="col-md-4 col-lg-4 col-sm-12">
              <div className={Styles.testio_monials_border}>
                <div>
                  <div className=" pb-2">
                    <div>
                      <Image
                        src={TestMonials1}
                        priority
                        alt="TestMonials1"
                        width={100}
                        className=" absolute top-[-50px] left-[130px] rounded-[50%] h-[100px]"
                      />
                    </div>
                    <div className=" pt-[30px] text-center">
                      <div className=" text-[20] font-bold text-customBlackText">
                        Amelia Millar
                      </div>
                      <p className=" text-lightTextColor text-[14px] font-medium">
                        Designer
                      </p>
                    </div>
                  </div>
                  <div className=" font-medium text-[14px] text-lightTextColor leading-[26px]">
                    {` Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorem consequuntur minus ducimus quibusdam doloremque
                    deleniti consequatur`}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-12">
              <div className={Styles.testio_monials_border}>
                <div>
                  <div className=" pb-2">
                    <Image
                      src={TestMonials2}
                      priority
                      alt="TestMonials2"
                      width={100}
                      className=" absolute top-[-50px] left-[130px] rounded-[50%] h-[100px]"
                    />
                    <div className=" pt-[30px] text-center">
                      <div className=" text-[20] font-bold text-customBlackText">
                        Amelia Millar
                      </div>
                      <p className=" text-lightTextColor text-[14px] font-medium">
                        Designer
                      </p>
                    </div>
                  </div>

                  <div className=" font-medium text-[14px] text-lightTextColor leading-[26px]">
                    {` Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorem consequuntur minus ducimus quibusdam doloremque
                    deleniti consequatur`}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-12">
              <div className={Styles.testio_monials_border}>
                <div>
                  <div className="pb-2">
                    <Image
                      src={TestMonials3}
                      priority
                      alt="TestMonials3"
                      width={100}
                      className=" absolute top-[-50px] left-[130px] rounded-[50%] h-[100px]"
                    />
                    <div className=" pt-[30px] text-center">
                      <div className=" text-[20] font-bold text-customBlackText">
                        Amelia Millar
                      </div>
                      <p className=" text-lightTextColor text-[14px] font-medium">
                        Designer
                      </p>
                    </div>
                  </div>

                  <div className=" font-medium text-[14px] text-lightTextColor leading-[26px]">
                    {` Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorem consequuntur minus ducimus quibusdam doloremque
                    deleniti consequatur`}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div>
            <Image
              src={Ellipse3}
              alt="ellipse"
              priority
              className=" absolute top-0 right-0 testimonials-circle-design-3"
            />
          </div>
          <div>
            <Image
              src={Ellipse4}
              alt="ellipse"
              priority
              className=" absolute top-0 right-0 testimonials-circle-design-4"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
