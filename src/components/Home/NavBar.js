import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import img1 from "../../Image/logo-d.png";

const NavBar = () => {
  return (
    <div className="NavBar-bg">
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <div className="LIVE ">
              <span className="MEET"> LIVE SEX SHOWS</span>
              <span className="MEET">MEET & FUCK</span>
              <span className="MEET">SUGAR BABIES</span>
              <span className="MEET">NEWSLETTER</span>
            </div>
          </div>
          <div className="col-md-3">
            <div>
              <p className="barsIcon">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="SUGAR">
              <img className="omg1" src={img1} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className=" NavBar-bg">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="LIVE ">
                <span className="MEET"> LOGIN</span>
                <span className="MEET">REGISTRATION</span>
                <span className="MEET">PUBLISH AD </span>
                <span className="MEET"> SUBSCRIPTIONS</span>
                <span className="MEET"> ADVANCED SEARCH</span>
                <span className="MEET"> MODELS ON TWITTER</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
