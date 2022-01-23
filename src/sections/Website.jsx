import React from "react";
import "../styles/sections/Website.scss";
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

function Website() {
  const [element, controls] = useScroll();
  return (
    <div className="website-container" id="testimonials" ref={element}>
      <div className="container">
        <motion.div
          className="title-container"
          variants={textAnimation}
          animate={controls}
          transition={{ duration: 0.3 }}
        >
          <Title
            title="Personal Portfolio Website"
            color="pink"
            lineCenter={true}
          />
          <p>12/2021 - 01/2022</p>
        </motion.div>
        <div className="content">
          <motion.div
            className="reasons"
            variants={fromDown}
            animate={controls}
            transition={{ duration: 0.3 }}
          >
            <ul>
              <li>The one you are on right now! 🤩</li>
              <li>
                I've always wanted to create a personal portfolio website to
                document my software career - it also allows people to have a
                more interactive experience when viewing my resume.
              </li>
              <li>
                I didn't want to simply import a template from Jekyll or
                WordPress, so I decided to create a website using the React
                framework from scratch. The design and layout of the UI was
                achieved through SASS, with animations to supplement the
                components via Framer Motion and iTyped.
              </li>
              <li>
                Responsive design to handle both desktop and mobile experiences.
              </li>
            </ul>
            <div
              className="github"
              onClick={() =>
                window.open("https://github.com/tc3149/portfolio2", "mywindow")
              }
            >
              <FaGithubSquare color="black" size={"2.5rem"} />
            </div>
          </motion.div>
          <motion.div
            className="picture-container"
            animate={controls}
            variants={cardAnimation}
            transition={{ delay: 0.1, stiffness: 300 }}
          ></motion.div>
        </div>
      </div>
    </div>
  );
}

export default Website;
