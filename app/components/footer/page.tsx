import Image from "next/image";
import React from "react";
import Styles from "../../styles/header.module.css";

const Footer = () => {
  return (
    <section>
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
                </div>
              </div>
              <div className="col-md-3">
                <div>
                  <div className="text-[18px] text-white font-bold border-b-2 border-cutomBorder pb-2">
                    Explore
                  </div>
                  <ul className={Styles.footer_list}>
                    <li>About Company</li>
                    <li>Meet the Team</li>
                    <li>News & Media</li>
                    <li>Our Projects</li>
                    <li>Contact</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className=" text-[18px] text-white font-bold border-b-2 border-cutomBorder pb-2">
                  Contact
                </div>
                <ul className={Styles.footer_list}>
                  <li>66 Road Broklyn Street, 600 New York, USA</li>
                  <li>
                    <a className=" text-white">needhelp@company.com</a>
                    <div className=" text-white">+92 666 888 0000</div>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <div className=" text-[18px] text-white font-bold border-b-2 border-cutomBorder pb-2">
                  Gallery
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
