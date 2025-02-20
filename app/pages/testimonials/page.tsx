import React from "react";
import Styles from "../../styles/header.module.css";
import { Profile } from "@/app/Icons/IconsExport";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const Testimonials = () => {
  return (
    <div>
      <section className={Styles.about_banner}>
        <div className={Styles.auto_container}>
          <div className="text-[60px] font-extrabold text-white relative z-10">
            Testimonial
          </div>
          <div className="text-white relative">{`Home > Pages > Testimonial`}</div>
        </div>
      </section>
      <section>
        <div className={Styles.auto_container}>
          <div>
            <div className="row py-[90px]">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className=" bg-cutomText relative">
                  <div className={Styles.testie_share}>
                    <div>
                      <img src="https://html.kodesolution.com/2024/sotech-php/images/icons/quote-icon.png" />
                    </div>
                  </div>
                  <div className="px-10 absolute top-[40px]">
                    <FontAwesomeIcon
                      icon={faStar}
                      className=" text-customBlue"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className=" text-customBlue"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className=" text-customBlue"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className=" text-customBlue"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className=" text-customBlue"
                    />
                  </div>
                  <div className={Styles.testimonials}>
                    <p className=" text-white leading-[40px] px-10 py-[80px] text-[22px] font-[400]">
                      {`Proin a lacus arcu. Nullam id dui eu orci maximus. Cras at auctor lectus, vel pretium tellus. Class aptent sociosqu ad litora torquent per conubia nostra.`}
                    </p>
                  </div>
                  <div className={Styles.testi_border}></div>
                </div>
                <div className=" flex justify-between items-center pt-4 ml-[160px]">
                  <div className=" flex items-center">
                    <Image
                      src={Profile}
                      alt="profile"
                      className="border-2 w-[80px] h-[80px] rounded-[50%]"
                    />
                    <div className=" ml-3">
                      <div className=" font-bold text-[16px]">
                        Jessica brown
                      </div>
                      <div className=" font-medium text-customBrown text-[14px]">
                        Founder of company
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className=" bg-cutomText relative">
                  <div className={Styles.testie_share}>
                    <div>
                      <img src="https://html.kodesolution.com/2024/sotech-php/images/icons/quote-icon.png" />
                    </div>
                  </div>
                  <div className="px-10 absolute top-[40px]">
                    <FontAwesomeIcon
                      icon={faStar}
                      className=" text-customBlue"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className=" text-customBlue"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className=" text-customBlue"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className=" text-customBlue"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className=" text-customBlue"
                    />
                  </div>
                  <div className={Styles.testimonials}>
                    <p className=" text-white leading-[40px] px-10 py-[80px] text-[22px] font-[400]">
                      {`Proin a lacus arcu. Nullam id dui eu orci maximus. Cras at auctor lectus, vel pretium tellus. Class aptent sociosqu ad litora torquent per conubia nostra.`}
                    </p>
                  </div>
                  <div className={Styles.testi_border}></div>
                </div>
                <div className=" flex justify-between items-center pt-4 ml-[160px]">
                  <div className=" flex items-center">
                    <Image
                      src={Profile}
                      alt="profile"
                      className="border-2 w-[80px] h-[80px] rounded-[50%]"
                    />
                    <div className=" ml-3">
                      <div className=" font-bold text-[16px]">Alesha Brown</div>
                      <div className=" font-medium text-customBrown text-[14px]">
                        Co Founder of company
                      </div>
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

export default Testimonials;
