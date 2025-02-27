import React from "react";
import Styles from "../../../styles/header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";

const ProjectList = () => {
  return (
    <div>
      <section className={Styles.about_banner}>
        <div className={Styles.auto_container}>
          <div className="text-[60px] font-extrabold text-white relative z-10">
            Projects
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
            Project List
          </div>
        </div>
      </section>
      {/* <section className=" py-[80px]">
        <div className={Styles.auto_container}>
          <div className="row ">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div>
                <div className={Styles.projects}>
                  <div className=" absolute bottom-7  p-[40px]">
                    <div className=" text-white text-[22px] font-bold">
                      Tech Solution
                    </div>
                    <div className=" font-medium uppercase text-[14px] text-customBlue pt-1">
                      Design / Ideas
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div>
                <div className={Styles.projects}>
                  <div className=" absolute bottom-7  p-[40px]">
                    <div className=" text-white text-[22px] font-bold">
                      Smart Visions
                    </div>
                    <div className=" font-medium uppercase text-[14px] text-customBlue pt-1">
                      Design / Ideas
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div>
                <div className={Styles.projects}>
                  <div className=" absolute bottom-7  p-[40px]">
                    <div className=" text-white text-[22px] font-bold">
                      Platform Integration
                    </div>
                    <div className=" font-medium uppercase text-[14px] text-customBlue pt-1">
                      Design / Ideas
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mt-3">
              <div>
                <div className={Styles.projects}>
                  <div className=" absolute bottom-7  p-[40px]">
                    <div className=" text-white text-[22px] font-bold">
                      Web Development
                    </div>
                    <div className=" font-medium uppercase text-[14px] text-customBlue pt-1">
                      Design / Ideas
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mt-3">
              <div>
                <div className={Styles.projects}>
                  <div className=" absolute bottom-7  p-[40px]">
                    <div className=" text-white text-[22px] font-bold">
                      Tech Solutions
                    </div>
                    <div className=" font-medium uppercase text-[14px] text-customBlue pt-1">
                      Design / Ideas
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mt-3">
              <div>
                <div className={Styles.projects}>
                  <div className=" absolute bottom-7  p-[40px]">
                    <div className=" text-white text-[22px] font-bold">
                      Smart Vision
                    </div>
                    <div className=" font-medium uppercase text-[14px] text-customBlue pt-1">
                      Design / Ideas
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section>
        <div className={Styles.auto_container}>
          <h1 className=" text-center font-bold py-10 text-[30px]">Comeing Soon</h1>
        </div>
      </section>
    </div>
  );
};

export default ProjectList;
