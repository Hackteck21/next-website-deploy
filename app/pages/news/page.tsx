import React from "react";
import Styles from "../../styles/header.module.css";
const News = () => {
  return (
    <div>
      <section className={Styles.about_banner}>
        <div className={Styles.auto_container}>
          <div className="text-[60px] font-extrabold text-white relative z-10">
            News
          </div>
        </div>
      </section>
      <section>
        <div>
          <div className=" text-center p-[80px]">
            <div className=" font-medium text-[16px] text-customBlue">
              FROM THE BLOG____
            </div>
            <div className="font-bold text-[50px] text-black">News</div>
          </div>
          <div className={Styles.auto_container}>
            <div className="row pb-[80px]">
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                <div className=" bg-white">
                  <div className={Styles.new_articles}>
                    <img src="https://html.kodesolution.com/2024/sotech-php/images/resource/news-1.jpg" />
                    <div className=" flex p-4">
                      <div>
                        <div className=" font-medium text-[14px] text-customBrown">
                          by Admin
                        </div>
                      </div>
                      <div className=" ml-4">
                        <div className="font-medium text-[14px] text-customBrown">
                          Technology
                        </div>
                      </div>
                    </div>
                    <div className="px-4">
                      <div className=" text-black font-bold text-[24px] pb-4">
                        Does My Website Need Any Blog?
                      </div>
                    </div>
                    <div className={`${Styles.read_more} px-4`}>Read More</div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                <div className=" bg-white">
                  <div className={Styles.new_articles}>
                    <img src="https://html.kodesolution.com/2024/sotech-php/images/resource/news-1.jpg" />
                    <div className=" flex p-4">
                      <div>
                        <div className=" font-medium text-[14px] text-customBrown">
                          by Admin
                        </div>
                      </div>
                      <div className=" ml-4">
                        <div className="font-medium text-[14px] text-customBrown">
                          Technology
                        </div>
                      </div>
                    </div>
                    <div className="px-4">
                      <div className=" text-black font-bold text-[24px] pb-4">
                        Does My Website Need Any Blog?
                      </div>
                    </div>
                    <div className={`${Styles.read_more} px-4`}>Read More</div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                <div className=" bg-white">
                  <div className={Styles.new_articles}>
                    <img src="https://html.kodesolution.com/2024/sotech-php/images/resource/news-1.jpg" />
                    <div className=" flex p-4">
                      <div>
                        <div className=" font-medium text-[14px] text-customBrown">
                          by Admin
                        </div>
                      </div>
                      <div className=" ml-4">
                        <div className="font-medium text-[14px] text-customBrown">
                          Technology
                        </div>
                      </div>
                    </div>
                    <div className="px-4">
                      <div className=" text-black font-bold text-[24px] pb-4">
                        Does My Website Need Any Blog?
                      </div>
                    </div>
                    <div className={`${Styles.read_more} px-4`}>Read More</div>
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

export default News;
