"use client";
import Image from "next/image";
import Styles from "./styles/header.module.css";
import device from "./assets/images/device.png";
import uxdesign from "./assets/images/engineering.png";
import support from "./assets/images/support-manage.png";
import startup from "./assets/images/startup.png";
import profile from "./assets/images/profile.png";
import dataAnalysis from "./assets/images/analysis.png";
import digitalMarketing from "./assets/images/social-media-marketing.png";
import uidesign from "./assets/images/ui.png";
import bannerImg1 from "./assets/images/bg/banner_right.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import "animate.css";
import { Codetrix, Startup, Truefinedge } from "./Icons/IconsExport";
import { motion } from "framer-motion";
import Presentation from "./assets/images/bg/presentation.jpg";
import Person4 from "./assets/images/bg/p4.jpg";
import Person1 from "./assets/images/bg/p1.jpg";
import Person3 from "./assets/images/bg/p3.jpg";
import SpringDance from "./assets/images/bg/spring-dec.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Home() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };
  return (
    <div>
      {/* <section className={Styles.banner}>
        <div className="text-center py-[100px] text-white">
          <div className=" uppercase pb-5">
            <span className=" border p-2 font-medium text-[16px]">
              Welcome to the best Codetrix
            </span>
          </div>
          <div className="font-bold text-[70px]  text-center pb-[30px]">
            Innovative Tech <div className=" leading-[60px]">It Solution</div>
          </div>
          <div>
            <button
              className="bg-customBlue py-3 px-5 font-bold text-[12px] uppercase text-white 
              transition-all duration-300 ease-in-out transform hover:bg-btnHover hover:translate-y-1 shadow-md hover:shadow-lg 
              animate__animated animate__fadeInUp animate__delay-1s"
            >
              Explore More
            </button>
          </div>
        </div>
      </section> */}
      <motion.div
        className="w-[100%]  rounded-lg mb-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <section className={Styles.banner}>
          {/* <div className="h-screen flex items-center">
          <div className={`${Styles.auto_container}  w-full h-full`}>
            <div className="row">
              <div className="col-md-6 col-lg-6 col-sm-12 flex items-center">
                <div className={Styles.banner_heading}>
                  <div className=" text-white text-[60px] font-extrabold pb-9 leading-[70px] tracking-[1px]">
                    Developing Your Ideas Into Reality
                  </div>
                  <p className=" text-white">
                    We provide custom software solution for any
                    industry.Creating high-value software and technology for
                    your business
                  </p>
                  <div className=" pt-2">
                    <button
                      className="bg-black py-3 px-5 font-bold text-[14px] uppercase text-white 
                        transition-all duration-300 ease-in-out transform hover:bg-btnHover hover:translate-y-1 shadow-md hover:shadow-lg 
                     animate__animated animate__fadeInUp animate__delay-1s"
                    >
                      Explore More
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-sm-12 flex items-center justify-center">
                <div className={Styles.left_banner_border}>
                  <Image src={bannerImg1} priority alt="bannerImg1" />
                </div>
              </div>
            </div>
          </div>
        </div> */}
          <div className="h-screen flex items-center justify-center relative">
            <div
              className={`${Styles.auto_container} w-full h-full flex items-center`}
            >
              <div className="row w-full flex items-center">
                {/* Left Column (Text Section) */}
                <div className="col-md-6 col-lg-6 col-sm-12 flex flex-col justify-center items-center text-center md:items-start md:text-left">
                  <div className={`${Styles.banner_heading} text-left`}>
                    <div className=" uppercase pb-5">
                      <span className=" border p-2 font-bold text-[16px] text-white">
                        Welcome to the best Codetrix
                      </span>
                    </div>
                    <div className="text-white text-[65px] font-extrabold pb-9 leading-[70px] tracking-[1px] text-left">
                      The Developing Your Ideas Into Reality
                    </div>
                    <p className="text-white">
                      We provide custom software solutions for any industry.
                      Creating high-value software and technology for your
                      business.
                    </p>
                    <div className="pt-4">
                      <button
                        className="bg-black py-3 px-5 font-bold text-[14px] uppercase text-white 
              transition-all duration-300 ease-in-out transform hover:bg-btnHover hover:translate-y-1 shadow-md hover:shadow-lg 
              animate__animated animate__fadeInUp animate__delay-1s"
                      >
                        Explore More
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right Column (Image Section) */}
                <div className="col-md-6 col-lg-6 col-sm-12 flex justify-center items-center relative">
                  <div className={`${Styles.left_banner_border}`}>
                    <Image src={bannerImg1} priority alt="bannerImg1" />
                  </div>
                  <div className={Styles.banner_right_card}></div>
                </div>
              </div>
            </div>
            <div
              className={`${Styles.banner_bottom_circle} absolute bottom-0 right-0`}
            ></div>
          </div>
        </section>
      </motion.div>

      <section>
        <div className="">
          <motion.div
            className="w-[100%]  rounded-lg mb-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className=" text-center font-extrabold text-[28px] ">
              Our Clients
            </div>
          </motion.div>
        </div>
      </section>
      <section>
        <div className={Styles.auto_container}>
          <div>
            <h1 className=" font-bold text-[30px] text-center tracking-[2px] capitalize">
              You Can See our clients feedback
              <span className=" text-customBlue"> What You Say?</span>
            </h1>
          </div>
          <div className="our-client-overall">
            <Slider {...settings}>
              <div>
                <div className="row">
                  <div className="col-md-4">
                    <div>
                      <Image
                        src={Person4}
                        alt="Personal"
                        priority
                        className=" h-[400px] w-[300px] client-image-border"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <p className="our-client-para">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facere, doloremque voluptate. Velit unde commodi,
                      distinctio necessitatibus adipisci sint incidunt dolorem
                      nihil rem dicta quae sapiente eius non accusamus ullam
                      quaerat.
                    </p>
                    <div className=" border-t-2 border-customBlue w-[200px]">
                      <div className=" font-bold text-[16px] text-customBlue pt-[10px]">
                        Smirthi Manthana
                      </div>
                      <p className=" font-medium text-[14px]">CEO of company</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="row">
                  <div className="col-md-4">
                    <div>
                      <Image
                        src={Person1}
                        alt="Personal"
                        priority
                        className=" h-[400px] w-[300px] client-image-border"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <p className="our-client-para">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facere, doloremque voluptate. Velit unde commodi,
                      distinctio necessitatibus adipisci sint incidunt dolorem
                      nihil rem dicta quae sapiente eius non accusamus ullam
                      quaerat.
                    </p>
                    <div>
                      <div className=" font-bold text-[16px] text-customBlue">
                        Smirthi Manthana
                      </div>
                      <p className=" font-medium text-[14px]">CEO of company</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="row">
                  <div className="col-md-4">
                    <div>
                      <Image
                        src={Person3}
                        alt="Person3"
                        priority
                        className=" h-[400px] w-[300px] client-image-border"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <p className="our-client-para">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facere, doloremque voluptate. Velit unde commodi,
                      distinctio necessitatibus adipisci sint incidunt dolorem
                      nihil rem dicta quae sapiente eius non accusamus ullam
                      quaerat.
                    </p>
                    <div>
                      <div className=" font-bold text-[16px] text-customBlue">
                        Smirthi Manthana
                      </div>
                      <p className=" font-medium text-[14px]">CEO of company</p>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
            <div className="client-box-design">
              <div className="client-border"></div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className=" py-5 client-marquee">
          <div
            className={`${Styles.auto_container} flex justify-between items-center`}
          >
            <div>
              <Image
                src={Truefinedge}
                alt="client"
                priority
                width={200}
                height={200}
              />
            </div>
            <div>
              <Image
                src={Codetrix}
                alt="client"
                priority
                width={200}
                height={200}
              />
            </div>

            <div>
              <Image
                src={Truefinedge}
                alt="client"
                priority
                width={200}
                height={200}
              />
            </div>
            <div>
              <Image
                src={Codetrix}
                alt="client"
                priority
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={`${Styles.card_bg} relative`}>
        <motion.div
          className="w-[100%]  rounded-lg mb-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className={Styles.service_dance_img}>
            <Image src={SpringDance} alt="SpringDance" priority />
          </div>
        </motion.div>

        <div className={Styles.auto_container}>
          <motion.div
            className="w-[100%]  rounded-lg mb-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className=" text-center font-bold text-[28px] pt-4 text-white">
              Our Services
            </div>
          </motion.div>

          <div className="row">
            <div className="col-md-4 col-lg-4 col-sm-12">
              <motion.div
                className="w-[100%]  rounded-lg mb-10"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className={Styles.card_custome}>
                  <div className={Styles.circle}>
                    <Image
                      src={device}
                      alt="device"
                      priority
                      className={`${Styles.card_img}`}
                    />
                  </div>
                  <div className=" font-bold text-[17px] text-center px-4 py-3 ">
                    Website Development
                  </div>
                  <p className=" text-center text-[14px] font-medium text-white">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Modi dolor asperiores dolorum praesentium aperiam
                    distinctio.
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-12">
              <motion.div
                className="w-[100%]  rounded-lg mb-10"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className={Styles.card_custome}>
                  <div className={Styles.circle}>
                    <Image
                      src={uxdesign}
                      alt="uxdesign"
                      priority
                      className={`${Styles.card_img}`}
                    />
                  </div>
                  <div className=" font-bold text-[17px] text-center px-4 py-3 ">
                    UI/UX Design
                  </div>
                  <p className=" text-center text-[14px] font-medium text-white">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Modi dolor asperiores dolorum praesentium aperiam
                    distinctio.
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-12">
              <motion.div
                className="w-[100%]  rounded-lg mb-10"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className={Styles.card_custome}>
                  <div className={Styles.circle}>
                    <Image
                      src={support}
                      alt="support"
                      priority
                      className={`${Styles.card_img}`}
                    />
                  </div>
                  <div className=" font-bold text-[17px] text-center px-4 py-3 ">
                    Support Management
                  </div>
                  <p className=" text-center text-[14px] font-medium text-white">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Modi dolor asperiores dolorum praesentium aperiam
                    distinctio.
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-12 pb-3">
              <motion.div
                className="w-[100%]  rounded-lg mb-10"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className={Styles.card_custome}>
                  <div className={Styles.circle}>
                    <Image
                      src={Startup}
                      alt="Startup"
                      priority
                      className={`${Styles.card_img}`}
                    />
                  </div>
                  <div className=" font-bold text-[17px] text-center px-4 py-3 ">
                    Product Development
                  </div>
                  <p className=" text-center text-[14px] font-medium text-white">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Modi dolor asperiores dolorum praesentium aperiam
                    distinctio.
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-12 pb-3">
              <motion.div
                className="w-[100%]  rounded-lg mb-10"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className={Styles.card_custome}>
                  <div className={Styles.circle}>
                    <Image
                      src={device}
                      alt="device"
                      priority
                      className={`${Styles.card_img}`}
                    />
                  </div>
                  <div className=" font-bold text-[17px] text-center px-4 py-3 ">
                    Website Development
                  </div>
                  <p className=" text-center text-[14px] font-medium text-white">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Modi dolor asperiores dolorum praesentium aperiam
                    distinctio.
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-12 pb-3">
              <motion.div
                className="w-[100%]  rounded-lg mb-10"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className={Styles.card_custome}>
                  <div className={Styles.circle}>
                    <Image
                      src={device}
                      alt="device"
                      priority
                      className={`${Styles.card_img}`}
                    />
                  </div>
                  <div className=" font-bold text-[17px] text-center px-4 py-3 ">
                    Website Development
                  </div>
                  <p className=" text-center text-[14px] font-medium text-white">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Modi dolor asperiores dolorum praesentium aperiam
                    distinctio.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <motion.div
          className="w-[100%]  rounded-lg mb-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className={Styles.service_dance_img_right}>
            <Image src={SpringDance} alt="SpringDance" priority />
          </div>
        </motion.div>
      </section>

      {/* banner 2 */}
      <section className=" py-[80px]">
        <div className={Styles.auto_container}>
          <div className="row ">
            <div className="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 order-lg-2 wow fadeInRight animated relative">
              <motion.div
                className="w-[100%]  rounded-lg mb-10"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className={Styles.banner_left_2}>
                  <div className="about-page">
                    <Image
                      src={Presentation}
                      alt="ff"
                      priority
                      className=" h-[600px] w-[500px]"
                    />
                  </div>
                </div>

                <div className=" absolute top-[160px] right-0 rounded-md shadow-customeBrow  bg-customBlue">
                  <div>
                    <div className=" flex items-center p-[30px]">
                      <Image
                        src={startup}
                        alt="startup"
                        priority
                        className={Styles.white_img}
                      />
                      <div className="ml-4 font-bold text-[24px] text-white">
                        30+{" "}
                        <div className=" text-[16px] font-medium">
                          {" "}
                          Years of experience
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className=" content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 order-lg-2 wow fadeInRight animated pl-70">
              <motion.div
                className="w-[100%]  rounded-lg mb-10"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className=" text-[16px] font-bold text-customBlue pb-4">
                  WHO WE ARE _____
                </div>
                <div className=" text-[50px] font-bold leading-[60px] pb-5  mr-20">
                  We provide best design Solution in town
                </div>
                <p className=" text-[16px]  font-normal text-customBrown leading-2 pb-4">
                  We provide a diverse array of systems, each tailored to
                  streamline your operations and enhance productivity. Whether
                  you require assistance with data process automation need.
                </p>
                <div>
                  <div className=" flex items-center pb-2">
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      height={16}
                      className=" text-customBlue"
                    />{" "}
                    <div className=" ml-2 font-medium text-[16px]">
                      Deliver Perfect Solution for business
                    </div>
                  </div>
                  <div className=" flex items-center pb-2">
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      height={16}
                      className=" text-customBlue"
                    />{" "}
                    <div className=" ml-2 font-medium text-[16px]">
                      Deliver Perfect Solution for business
                    </div>
                  </div>
                  <div className=" flex items-center pb-2">
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      height={16}
                      className=" text-customBlue"
                    />{" "}
                    <div className=" ml-2 font-medium text-[16px]">
                      Deliver Perfect Solution for business
                    </div>
                  </div>
                </div>
                <div className=" flex justify-between items-center pt-4">
                  <div className=" flex items-center">
                    <Image
                      src={profile}
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

                  <div>
                    <button className=" bg-customBlue py-3 px-5 font-bold text-[12px] uppercase text-white transition-all duration-300 ease-in-out transform hover:bg-btnHover hover:translate-y-1 shadow-md hover:shadow-lg">
                      Explore Now
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      {/* Section 3 */}
      <section className={Styles.overall_offer}>
        <div className={Styles.section_3}>
          <motion.div
            className="w-[100%]  rounded-lg mb-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className=" text-center p-[100px]">
              <div className=" uppercase text-[16px] text-customBlue font-medium">
                WHAT WE OFFERING{" "}
              </div>
              <div className=" text-white font-bold text-[40px] leading-[50px]">
                We offer premium services<div></div> Exclusively for you.
              </div>
            </div>
          </motion.div>

          <div className={Styles.auto_container}>
            <div className="row pb-[60px] animate__animated animate__fadeInUp animate__delay-1s">
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <motion.div
                  className="w-[100%]  rounded-lg mb-10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="text-white">
                    <div className=" border border-customBrown p-4 ">
                      <div className="flex items-center justify-center ">
                        <Image
                          src={uxdesign}
                          alt="uxdesign"
                          priority
                          className={`${Styles.white_img}`}
                        />
                      </div>
                      <div className="text-center pt-6">
                        <div className=" text-white font-bold text-[16px]">
                          Websit Development
                        </div>
                        <p className=" text-customBrown text-[14px] font-medium pt-3">
                          Donec suscipit ante ipsum. Donec convallis quality
                          torto
                        </p>
                        <div>Read More</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <motion.div
                  className="w-[100%]  rounded-lg mb-10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="text-white">
                    <div className=" border border-customBrown p-4 ">
                      <div className="flex items-center justify-center ">
                        <Image
                          src={uidesign}
                          alt="uidesign"
                          priority
                          className={`${Styles.white_img}`}
                        />
                      </div>
                      <div className="text-center pt-6">
                        <div className=" text-white font-bold text-[16px]">
                          UI/UX Designing
                        </div>
                        <p className=" text-customBrown text-[14px] font-medium pt-3">
                          Donec suscipit ante ipsum. Donec convallis quality
                          torto
                        </p>
                        <div>Read More</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <motion.div
                  className="w-[100%]  rounded-lg mb-10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="text-white">
                    <div className=" border border-customBrown p-4 ">
                      <div className="flex items-center justify-center ">
                        <Image
                          src={digitalMarketing}
                          alt="digitalMarketing"
                          priority
                          className={`${Styles.white_img}`}
                        />
                      </div>
                      <div className="text-center pt-6">
                        <div className=" text-white font-bold text-[16px]">
                          Digital Marketing
                        </div>
                        <p className=" text-customBrown text-[14px] font-medium pt-3">
                          Donec suscipit ante ipsum. Donec convallis quality
                          torto
                        </p>
                        <div>Read More</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <motion.div
                  className="w-[100%]  rounded-lg mb-10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="text-white">
                    <div className=" border border-customBrown p-4 ">
                      <div className="flex items-center justify-center ">
                        <Image
                          src={dataAnalysis}
                          alt="dataAnalysis"
                          priority
                          className={`${Styles.white_img}`}
                        />
                      </div>
                      <div className="text-center pt-6">
                        <div className=" text-white font-bold text-[16px]">
                          Data Analysis
                        </div>
                        <p className=" text-customBrown text-[14px] font-medium pt-3">
                          Donec suscipit ante ipsum. Donec convallis quality
                          torto
                        </p>
                        <div>Read More</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section 5 */}
      <section>
        <div>
          <div className={Styles.it_solution}>
            <div className=" text-[60px] font-extrabold text-center text-white  border-1 border-cutomBorder2 p-[30px] mx-[40px]">
              <div className=" mt-4">
                IT Solutions & Services Right <div>At Your Fingertips</div>
              </div>

              <div className=" text-center pb-[40px]">
                <button className=" text-white bg-customBlue  px-5 font-bold text-[14px] uppercase leading-[50px] transition-all duration-300 ease-in-out transform hover:bg-btnHover hover:translate-y-1 shadow-md hover:shadow-lg">
                  Discover More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
