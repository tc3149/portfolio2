import React from "react";
import "../styles/sections/Marketplace.scss";
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

function Marketplace() {
  const [element, controls] = useScroll();
  return (
    <div className="marketplace-container" id="marketplace" ref={element}>
      <div className="container">
        <motion.div
          className="title-container"
          variants={textAnimation}
          animate={controls}
          transition={{ duration: 0.3 }}
        >
          <Title title="Marketplace App" color="blue" lineCenter={true} />
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
            <ul>
              <li>
                A mobile application made using React Native and the expo
                platform.
              </li>
              <li>
                Features a new listing screen, account screen and messages
                screen to allow for users to communicate with each other.
              </li>
              <li>
                User input saved into external database (json file currently)
                using Formik API.
              </li>
              <li>
                Uses expo-location to enable location sharing for products -
                shows if a product is feasible enough in location to be
                purchased.
              </li>
              <li>
                Screens are maneuvered using a StackNavigator to enable
                responsive and efficient feedback from touches/screen changes.
              </li>
              <li>
                My first dive in to full-stack development for mobile
                applications - past work on React.js helped significantly
              </li>
            </ul>
            <div
              className="github"
              onClick={() =>
                window.open("https://github.com/tc3149/marketplace", "mywindow")
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

export default Marketplace;
