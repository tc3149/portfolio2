import React from "react";
import Button from "../components/Button";
import Title from "../components/Title";
import "../styles/sections/Blogs.scss";
import BlogImage1 from "../assets/blogImage1.jpg";
import BlogImage2 from "../assets/blogImage2.jpg";
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
          <p>Insights and advice from our experts.</p>
        </motion.div>
        <div className="blogs">
          <Blog
            image={BlogImage1}
            variants={cardAnimation}
            animate={controls}
            title="Top list of Mistakes to Avoid During MVP Development"
            subTitle="When there appears an idea to create a startup, have to take into
            account all the risks you will face and evalute them thoughtfullu.
            Also as a rule..."
          />
          <Blog
            image={BlogImage2}
            variants={cardAnimation}
            animate={controls}
            title="A Day in the life on an Engineering Manager"
            subTitle="During the eight years I spent as an engineering manager, I regularly tracked how I spent my time. As a startup engineering manager, I was ... "
          />
          <Blog
            image={BlogImage3}
            variants={cardAnimation}
            animate={controls}
            title="How to Build a Strong Remote Work Culture"
            subTitle="Kishan Sheth is the compnay VP of Talent Operations responsible for matching some of the world's greatest freelancers with companies who..."
          />
        </div>
        <div className="button-container">
          <Button content="View All" />
        </div>
      </div>
    </div>
  );
}

export default Blogs;
