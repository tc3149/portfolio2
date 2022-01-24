import React from "react";
import BrandName from "../components/BrandName";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaFacebookF, FaTwitter } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { AiFillInstagram, AiOutlineSend } from "react-icons/ai";
import { cardAnimation, fromRight, headerAnimation } from "../Animation";
import "../styles/sections/Footer.scss";
import { motion } from "framer-motion";
import { fromUp, fromDown } from "../Animation";
import { useScroll } from "../components/useScroll";
import Title from "../components/Title";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdOutlineContactPage } from "react-icons/md";

function Footer() {
  const [element, controls] = useScroll();
  return (
    <div className="footer-container">
      <div className="container">
        <h1>Get in Touch</h1>
        <p>Feel free to email me for any enquires at thomaschen333@gmail.com</p>
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
          <div className="resume">
            <MdOutlineContactPage color="white" size={"2rem"} />
          </div>
          <div className="linkedin">
            <AiFillLinkedin color="white" size={"2rem"} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Footer;
