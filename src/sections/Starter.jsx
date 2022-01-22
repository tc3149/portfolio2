import React from "react";
import { useScroll } from "../components/useScroll";
import { motion } from "framer-motion";
import "../styles/sections/Starter.scss";
import { headerAnimation, imageAnimation } from "../Animation";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import { AiFillGithub } from "react-icons/ai";
import { MdOutlineContactPage } from "react-icons/md";

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
          variants={headerAnimation}
          animate={controls}
          transition={{ delay: 0.2, type: "tween" }}
        >
          <h1>Thomas Chen</h1>
          <h2>
            <span ref={textRef}></span>
          </h2>
        </motion.div>
        <div className="row-container">
          <div className="section1">
            <p>Bachelor of Commerce/Computer Science</p>
            <p className="dean">Dean's List - Highly Commended</p>
          </div>
          <div className="vertical"></div>
          <div className="section2">
            <p>University of New South Wales</p>
          </div>
        </div>
        <div className="contact-container">
          <div
            className="github"
            onClick={() => window.open("https://github.com/tc3149", "mywindow")}
            style={{ cursor: "pointer" }}
          >
            <AiFillGithub color="white" size={"2rem"} />
          </div>
          <div className="resume" style={{ cursor: "pointer" }}>
            <MdOutlineContactPage color="white" size={"2rem"} />
          </div>
        </div>
      </div>
    </div>
  );
}
