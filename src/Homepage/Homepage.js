import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";

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
    <div className="main" id="main">
      <div className="heads" id="heads">
        <Link to="main" smooth={true} duration={1000}>
          <div className="logo" id="HOME">
            <img src={logo} />
          </div>
        </Link>

        <ul className="nav">
          <li>
            <Link to="main" smooth={true} duration={1000}>
              HOME
            </Link>
          </li>

          <li>
            <Link to="about-title" smooth={true} duration={1000}>
              ABOUT
            </Link>
          </li>

          <li>
            <Link to="skill-main" smooth={true} duration={1000}>
              SKILLS
            </Link>
          </li>
          <li>
            <Link to="projectComponent" smooth={true} duration={1000}>
              PROJECTS
            </Link>
          </li>
        </ul>
      </div>

      <br />
      <div className="sda">
        <h1 className="nama">Dollyton Hutapea</h1>
        <div className="illu"></div>
      </div>

      <br />
      <h4 className="front">FRONT-END DEVELOPER</h4>
      <div className="home-btn">
        <Link to="about-title" smooth={true} duration={1000}>
          <button className="btn-more">More About Me</button>
        </Link>
      </div>

      <div className="social-logo">
        <div className="twit">
          {" "}
          <a
            href="https://twitter.com/DolyTonn"
            target="_blank"
            rel="noreferrer"
          ></a>
        </div>
        <div className="git">
          <a
            href="https://github.com/dollyton-h"
            target="_blank"
            rel="noreferrer"
          ></a>
        </div>
        <div className="link">
          <a
            href="https://www.linkedin.com/in/dollyton/"
            target="_blank"
            rel="noreferrer"
          ></a>
        </div>
      </div>

      <div className="aboutComponent" id="aboutComponent"></div>

      {/* <div className="skillsComponent" id="skillsComponent"></div> */}
    </div>
  );
}

export default HomePage;
