import React from "react";
import "../styles/components/Card.scss";

function Card({ logo, title }) {
  return (
    <div className="card">
      <div className="logo">{logo}</div>
      <h4>{title}</h4>
    </div>
  );
}

export default Card;
