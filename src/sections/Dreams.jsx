import React from "react";
import "../styles/sections/Dreams.scss";
import Title from "../components/Title";
import { motion } from "framer-motion";
import {
  textAnimation,
  cardAnimation,
  imageAnimation,
  headerAnimation,
  fromDown,
} from "../Animation";
import { useScroll } from "../components/useScroll";
import { FaGithubSquare } from "react-icons/fa";

function Dreams() {
  const [element, controls] = useScroll();
  return (
    <div className="testimonials-container" id="testimonials" ref={element}>
      <div className="container">
        <motion.div
          className="title-container"
          variants={textAnimation}
          animate={controls}
          transition={{ duration: 0.3 }}
        >
          <Title title="UNSW Dreams" color="blue" lineCenter={true} />
          <p>02/2021 - 05/2021</p>
        </motion.div>
        <div className="content">
          <motion.div
            className="picture-container"
            animate={controls}
            variants={cardAnimation}
            transition={{ delay: 0.1, stiffness: 300 }}
          ></motion.div>
          <motion.div
            className="reasons"
            variants={fromDown}
            animate={controls}
            transition={{ duration: 0.3 }}
          >
            <ul className="list">
              <li>
                Team-based back-end development of a web-based messaging
                application for university students
              </li>
              <li>
                UNSW Dreams is a communication tool, similar to Microsoft
                Teams/Discord that allows students to share, discuss, and
                collaborate together
              </li>
              <li>Strict practice of Test-driven development</li>
              <li>
                Problems solved: Authentication, Storage of Accounts,
                Persistence of data (channels, users and messages)
              </li>
              <li>
                Skills used include Python, Pytest, Git, SDLC planning, system
                design, requirements analysis and construction, deployment, team
                management and project planning
              </li>
            </ul>
            <div
              className="github"
              onClick={() =>
                window.open("https://github.com/tc3149/dreams", "mywindow")
              }
            >
              <FaGithubSquare color="black" size={"2.5rem"} />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Dreams;
