import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";
import user from "../assets/dollyton.png";
import asd from "../assets/asd.png";
import { motion } from "framer-motion";

import { AiFillHome, AiOutlineHeart } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import { CgAddR } from "react-icons/cg";
import { BsThreeDots } from "react-icons/bs";

import { ImCompass2 } from "react-icons/im";

//import ReactDOM from "react-dom";
import "./homepage.scss";

function HomePage() {
  const [show, setShow] = useState(false);
  const myRef = useRef(null);
  const [scro, setScro] = useState(false);

  // useEffect(() => {
  //   let url = window.location.href.split("/");
  //   let target = url[url.length - 1].toLowerCase();
  //   let element = document.getElementById(target);
  //   element && element.scrollIntoView({ behavior: "smooth", block: "start" });
  // }, []);

  window.addEventListener("scroll", function () {
    var heads = document.getElementById("heads");
    heads.classList.toggle("sticky", window.scrollY > 0);
  });

  useEffect(() => {
    document.title = "Fake-Insta";
  }, []);
  return (
    <div>
      <div className="main" id="main">
        <div className="heads" id="heads">
          <Link to="main" smooth={true} duration={1000}>
            <div className="logo" id="HOME">
              <img src={logo} />
            </div>
          </Link>
          <input className="sea" type="text" placeholder="Search" disabled />

          <ul className="nav">
            <li>
              <Link to="main" smooth={true} duration={1000}>
                <AiFillHome fontSize={25} />
              </Link>
            </li>

            <li>
              <Link to="about-title" smooth={true} duration={1000}>
                <FiSend fontSize={25} />
              </Link>
            </li>

            <li>
              <Link to="skill-main" smooth={true} duration={1000}>
                <CgAddR fontSize={25} />
              </Link>
            </li>
            <li>
              <Link to="projectComponent" smooth={true} duration={1000}>
                <ImCompass2 fontSize={25} />
              </Link>
            </li>
            <li>
              <Link to="projectComponent" smooth={true} duration={1000}>
                <AiOutlineHeart fontSize={28} />
              </Link>
            </li>
            <li>
              <div className="profile-pict">
                <img src={user} />
              </div>
            </li>
          </ul>
        </div>

        <br />
        <div className="content-wrap">
          <div className="igs">
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              //whileHover={{ scale: 1.1 }}
              className="story1"
            ></motion.div>
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              //whileHover={{ scale: 1.1 }}
              className="story1"
            ></motion.div>
            <div className="story1"></div>
            <div className="story1"></div>
            <div className="story1"></div>
            <div className="story1"></div>
          </div>
          <div className="side-bar">
            <img src={user} />
            <p className="usernm">
              dolytonn<p>Dollyton Hutapea</p>
            </p>
            <p className="alihkan">Alihkan</p>
          </div>

          <div className="conten-photo">
            <div className="main-content1">
              <div className="coob">
                <img className="user-con" src={user} />
                <p>Dollyton Hutapea</p>
                <BsThreeDots fontSize={25} />
              </div>

              <img className="content1" src={asd} />
            </div>
          </div>

          <div className="ffa">
            <div className="saran">
              <p className="saa">Saran Untuk Anda</p>
              <p className="lii">Lihat Semua</p>
            </div>

            <div className="user-rec">
              <img src={user} />
              <p className="usernm-rec">
                dolytonn<p>New in Fake-Insta</p>
              </p>
              <p className="user-rec-ikuti">Ikuti</p>
            </div>
            <div className="user-rec1">
              <img src={user} />
              <p className="usernm-rec">
                dolytonn<p>New in Fake-Insta</p>
              </p>
              <p className="user-rec-ikuti">Ikuti</p>
            </div>
            <div className="user-rec1">
              <img src={user} />
              <p className="usernm-rec">
                dolytonn<p>New in Fake-Insta</p>
              </p>
              <p className="user-rec-ikuti">Ikuti</p>
            </div>
            <div className="user-rec1">
              <img src={user} />
              <p className="usernm-rec">
                dolytonn<p>New in Fake_Insta</p>
              </p>
              <p className="user-rec-ikuti">Ikuti</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
