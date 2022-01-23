import React from "react";
import Title from "../components/Title";
import "../styles/sections/About.scss";
import { motion } from "framer-motion";
import { imageAnimation, reveal } from "../Animation";
import { useScroll } from "../components/useScroll";

function About() {
  const [element, controls] = useScroll();
  return (
    <div className="about-container" id="about" ref={element}>
      <div className="container">
        <motion.div
          className="details"
          animate={controls}
          variants={reveal}
          transition={{ delay: 0.1, stiffness: 300 }}
        >
          <Title title="About Me 😎" color="blue" lineCenter={false} />
          <p>
            Hi! My name is Thomas and I am a Third Year (Penultimate)
            Commerce/Computer Science Student at UNSW. I am largely a
            self-taught developer and am always keen to learn new tools or
            languages to apply to my personal projects. As a casual academic, I
            also assist UNSW's School of Computer Science with marking and
            tutorials.
          </p>
          <p>
            Currently I am exploring web development (e.g. this website!)
            through React.js and mobile app development with React Native. I
            find full-stack development the most interesting at the moment; it
            is satisfying seeing and creating polished products with beautiful
            user interfaces.
          </p>
          <p>
            Outside of coursework, you can find me helping out at CSESoc or
            travelling with mates ✈
          </p>
          <p>Here's my cat Theo in a box 🐱📦</p>
        </motion.div>
        <motion.div
          className="picture-container"
          animate={controls}
          variants={imageAnimation}
          transition={{ delay: 0.1, stiffness: 300 }}
        ></motion.div>
      </div>
    </div>
  );
}

export default About;
