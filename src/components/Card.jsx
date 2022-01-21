import React from "react";
import "../styles/components/Card.scss";
import { motion } from "framer-motion";
import { cardAnimation } from "../Animation";

function Card({ logo, title, animateCustom }) {
  return (
    <motion.div
      className="card"
      variants={cardAnimation}
      animate={animateCustom}
      transition={{ stiffness: 5000 }}
    >
      <div className="logo">{logo}</div>
      <h4>{title}</h4>
    </motion.div>
  );
}

export default Card;
