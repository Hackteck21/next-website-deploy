import React from "react";
import Styles from "../../styles/header.module.css";
import {
  TestMonials1,
  TestMonials2,
  TestMonials3,
} from "@/app/Icons/IconsExport";
import Image from "next/image";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar } from "@fortawesome/free-solid-svg-icons";
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
      <section className={Styles.service_overall_bg}>
        <div className={Styles.auto_container}>
          <div className=" row py-[160px]">
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
                      <div className=" text-[20] font-bold">Amelia Millar</div>
                      <p className=" text-lightTextColor text-[14px]">
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
                      <div className=" text-[20] font-bold">Amelia Millar</div>
                      <p className=" text-lightTextColor text-[14px]">
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
                      <div className=" text-[20] font-bold">Amelia Millar</div>
                      <p className=" text-lightTextColor text-[14px]">
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
      </section>
    </div>
  );
};

export default Testimonials;
