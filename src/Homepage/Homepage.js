import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";
import user from "../assets/dollyton.png";
import asd from "../assets/asd.png";
import { motion } from "framer-motion";
import { postingPhoto } from "../Services/userService";
import { AiFillHome, AiOutlineHeart } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import { CgAddR } from "react-icons/cg";
import { BsThreeDots } from "react-icons/bs";
import axios from "axios";
import { ImCompass2 } from "react-icons/im";
import Modal from "react-modal";
import ModalLog from "react-modal";
import { useHistory } from "react-router-dom";

//import ReactDOM from "react-dom";
import "./homepage.scss";

function HomePage() {
  const [show, setShow] = useState([]);
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [preview, setPreview] = useState("");
  const [open, setOpen] = useState(false);
  const [modalLog, setModalLog] = useState(false);
  const history = useHistory();
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
  };

  const postingHandler = (e) => {
    const store = window.localStorage;
    postingPhoto(description, selectedFile)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // useEffect(() => {
  //   let url = window.location.href.split("/");
  //   let target = url[url.length - 1].toLowerCase();
  //   let element = document.getElementById(target);
  //   element && element.scrollIntoView({ behavior: "smooth", block: "start" });
  // }, []);

  useEffect(() => {
    const store = window.localStorage;
    const token = store.getItem("token");
    axios
      .get("https://fakes-insta.herokuapp.com/api/fakeInsta/posting/myPost", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        console.log(response.data.data);
        setShow(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  window.addEventListener("scroll", function () {
    var heads = document.getElementById("heads");
    heads.classList.toggle("sticky", window.scrollY > 0);
  });

  useEffect(() => {
    document.title = "Fake-Insta";
  }, []);
  const store = window.localStorage;
  const nama = store.getItem("username");
  console.log(preview);
  console.log(description);

  const logoutHandler = () => {
    history.push("/");
    const store = window.localStorage;
    store.clear("");
    window.location.reload();
  };
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
              <Link
                onClick={(e) => setOpen(true)}
                to="skill-main"
                smooth={true}
                duration={1000}
              >
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
              {store.getItem("username")}
              <p>Nandra Caaaputra</p>
            </p>
            <p onClick={(e) => setModalLog(true)} className="alihkan">
              Alihkan
            </p>
          </div>

          {show.map((e) => {
            return (
              <div className="conten-photo">
                <div className="main-content1">
                  <div className="coob">
                    <img className="user-con" src={user} />
                    <p>{store.getItem("username")}</p>
                    <BsThreeDots fontSize={25} />
                  </div>
                  <div className="cont-det">
                    <img className="content1" src={e.image} />
                    <p>
                      {store.getItem("username")}
                      <span>{e.description}</span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

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
                dolytonn<p>News in Fake-Insta</p>
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
      <Modal isOpen={open} onRequestClose={() => setOpen(false)}>
        <div className="fot-pre">
          <img className="con-picturese" src={preview} />
        </div>

        <div className="upload-btn-wrapper">
          <br />
          <input
            // multiple="multiple"
            // value={selectedFile}
            // name="myfile"
            className="input-profile-photo"
            type="file"
            accept="image/*"
            onChange={onSelectFile}
          />
        </div>
        <br />
        <div className="profile-setting-name">
          <input
            value={description}
            className="input-profile-setting"
            type="text"
            placeholder="insert Description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button className="btn-pos" onClick={() => postingHandler()}>
          Post
        </button>
      </Modal>
      <ModalLog isOpen={modalLog} onRequestClose={() => setModalLog(false)}>
        <div>
          <hr />
          <div className="modal-log">
            <img src={user} />
            <p>{store.getItem("username")}</p>
            <button onClick={logoutHandler}>Logout</button>
          </div>
          <hr />
        </div>
      </ModalLog>
    </div>
  );
}

export default HomePage;
