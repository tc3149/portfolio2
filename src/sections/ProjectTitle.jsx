import React, { useEffect, useRef } from "react";
import "../styles/sections/ProjectTitle.scss";
import { motion } from "framer-motion";
import { init } from "ityped";
import { useScroll } from "../components/useScroll";
import { BsChevronDoubleDown } from "react-icons/bs";

function ProjectTitle() {
  const [element, controls] = useScroll();
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Projects"],
    });
  }, []);
  return (
    <div className="why-container" id="services" ref={element}>
      <h1>
        <span ref={textRef}></span>
      </h1>
      <a className="chevron" href="#testimonials">
        <BsChevronDoubleDown color="black" size={"2rem"} />
      </a>
    </div>
  );
}

export default ProjectTitle;
