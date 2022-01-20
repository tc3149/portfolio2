import React from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import Title from "../components/Title";
import "../styles/sections/About.scss";
import { HiLightBulb } from "react-icons/hi";
import { BsCalendarFill } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { SiGooglemessages } from "react-icons/si";

function About() {
  return (
    <div className="about-container">
      <div className="container">
        <div className="details">
          <Title title="About CRYO" color="blue" lineCenter={false} />
          <p>
            We Believe that everyone deserves to have a website or online store.
            Innovation and simplicity make us happy. Our mission is to help
            people achieve what they have passionate about it.
          </p>
          <p>
            We are excited to simplify SEO for everyone through software,
            education, or cimmunity.
          </p>
          <Button content="Why cryo?" />
        </div>
        <div className="cards">
          <Card title="Innovative Ideas" logo={<HiLightBulb />} />
          <Card title="Planning" logo={<BsCalendarFill />} />
          <Card title="Communication" logo={<BiSupport />} />
          <Card title="24 * 7 Support" logo={<SiGooglemessages />} />
        </div>
      </div>
    </div>
  );
}

export default About;
