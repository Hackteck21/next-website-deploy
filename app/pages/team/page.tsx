import React from "react";
import Styles from "../../styles/header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

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
      <section className=" py-[140px]">
        <div className={Styles.auto_container}>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className=" relative">
                <div>
                  <img src="https://html.kodesolution.com/2024/sotech-php/images/resource/team-1.jpg" />
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
              <div className=" relative">
                <div>
                  <img src="https://html.kodesolution.com/2024/sotech-php/images/resource/team-2.jpg" />
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
              <div className=" relative">
                <div>
                  <img src="https://html.kodesolution.com/2024/sotech-php/images/resource/team-3.jpg" />
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamList;
