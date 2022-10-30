import React from "react";
import { useScroll } from "../components/useScroll";
import { motion } from "framer-motion";
import "../styles/sections/Starter.scss";
import { cardAnimation, fromRight, headerAnimation } from "../Animation";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdOutlineContactPage } from "react-icons/md";
import { BsChevronDoubleDown } from "react-icons/bs";
import Pdf from "../assets/newResume.pdf";

export default function Starter() {
  const [element, controls] = useScroll();
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Student", "Developer", "Casual Academic"],
    });
  }, []);

  return (
    <div className="main-container" ref={element}>
      <div className="container">
        <motion.div
          className="content"
          variants={cardAnimation}
          transition={{ delay: 0.5, type: "tween" }}
        >
          <h1>Thomas Chen</h1>
          <h2>
            <span ref={textRef}></span>
          </h2>
        </motion.div>
        <div className="row-container">
          <motion.div
            className="section1"
            variants={fromRight}
            transition={{ delay: 0.5, type: "tween" }}
          >
            <p>Bachelor of Commerce/Computer Science</p>
            <p className="dean">Dean's List - Highly Commended</p>
          </motion.div>
          <motion.div
            className="vertical"
            variants={headerAnimation}
            transition={{ delay: 0.5, type: "tween" }}
          >
            <span></span>
          </motion.div>
          <motion.div
            className="section2"
            variants={headerAnimation}
            transition={{ delay: 0.5, type: "tween" }}
          >
            <p>University of New South Wales</p>
          </motion.div>
        </div>
        <motion.div
          className="contact-container"
          variants={cardAnimation}
          transition={{ delay: 0.5, type: "tween" }}
        >
          <div
            className="github"
            onClick={() => window.open("https://github.com/tc3149", "mywindow")}
          >
            <AiFillGithub color="white" size={"2rem"} />
          </div>
          <div className="resume" onClick={() => window.open(Pdf)}>
            <MdOutlineContactPage color="white" size={"2rem"} />
          </div>
          <div
            className="linkedin"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/thomaswchen/",
                "mywindow"
              )
            }
          >
            <AiFillLinkedin color="white" size={"2rem"} />
          </div>
        </motion.div>
        <a className="chevron" href="#about">
          <BsChevronDoubleDown color="white" size={"2rem"} />
        </a>
      </div>
    </div>
  );
}
