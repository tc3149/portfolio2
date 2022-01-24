import React from "react";
import "../styles/sections/Possum.scss";
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

function Possum() {
  const [element, controls] = useScroll();
  return (
    <div className="possum-container" id="possum" ref={element}>
      <div className="container">
        <motion.div
          className="title-container"
          variants={textAnimation}
          animate={controls}
          transition={{ duration: 0.3 }}
        >
          <Title
            title="Possum Point of Sale App"
            color="pink"
            lineCenter={true}
          />
          <p>2022 - In development</p>
        </motion.div>
        <div className="content">
          <motion.div
            className="reasons"
            variants={fromDown}
            animate={controls}
            transition={{ duration: 0.3 }}
          >
            <ul>
              <li>
                Team-based development of a POS app created with expo and React
                Native.
              </li>
              <li>
                Role: Leading in the design and devlopment of a customisable
                point-of-sale app which provides a menu ordering, transaction,
                and sales data visualisation interface
              </li>
              <li>
                Our vision is to turn an expensive service into an accessible
                tool that can create efficiencies and grow small businesses.
              </li>
              <li>
                Skills used include self-taught JavaScript, HTML/CSS, ReactJS,
                Firebase, Git, UML, system design, data visualisation,
                leadership and timelining.
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

export default Possum;
