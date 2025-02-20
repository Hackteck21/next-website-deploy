import React from "react";
import Styles from "../../../styles/header.module.css";
import Image from "next/image";
import {
  DataAnalysis,
  DigitalMarketing,
  Startup,
  Uxdesign,
} from "@/app/Icons/IconsExport";
const ServiceList = () => {
  return (
    <div>
      <section className={Styles.about_banner}>
        <div className={Styles.auto_container}>
          <div className="text-[60px] font-extrabold text-white relative z-10">
            Services
          </div>
        </div>
      </section>
      <section>
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
      </section>
    </div>
  );
};

export default ServiceList;
