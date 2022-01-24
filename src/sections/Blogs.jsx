import React from "react";
import Button from "../components/Button";
import Title from "../components/Title";
import "../styles/sections/Blogs.scss";
import BlogImage1 from "../assets/blogImage1.jpg";
import BlogImage2 from "../assets/f13.jpg";
import BlogImage3 from "../assets/blogImage3.jpg";
import Blog from "../components/Blog";
import "../styles/sections/Blogs.scss";

import { motion } from "framer-motion";
import { textAnimation, cardAnimation } from "../Animation";
import { useScroll } from "../components/useScroll";

function Blogs() {
  const [element, controls] = useScroll();
  return (
    <div className="blogs-container" id="blog" ref={element}>
      <div className="container">
        <motion.div
          className="title-container"
          variants={textAnimation}
          animate={controls}
          transition={{ duration: 0.3 }}
        >
          <Title title="Blogs" color="pink" lineCenter={true} />
          <p>My random thoughts and experiences.</p>
        </motion.div>
        <div className="blogs">
          <Blog
            image={BlogImage1}
            variants={cardAnimation}
            animate={controls}
            title="Honest Thoughts on UNSW CSE Courses"
            subTitle="In progress! 😴"
          />
          <Blog
            image={BlogImage2}
            variants={cardAnimation}
            animate={controls}
            title="My thoughts on the Hamilton-Verstappen Drama"
            subTitle="I will get on to writing blogs soon! i have so much to talk about on this LOL 😴"
          />
          <Blog
            image={BlogImage3}
            variants={cardAnimation}
            animate={controls}
            title="In Progress"
            subTitle="I will get on to writing blogs soon! 😴"
          />
        </div>
        <div className="button-container" style={{ display: "none" }}>
          <Button content="View All" />
        </div>
      </div>
    </div>
  );
}

export default Blogs;
