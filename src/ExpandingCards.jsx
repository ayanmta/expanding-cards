import React, { useState } from "react";
import data from "./Expanding-Card-Images";
import "./ExpandingCards.css";

const ExpandingCards = () => {
  const [active, setActive] = useState(0);

  const toggle = (i) => {
    setActive(i);
  };
  return (
    <div className="pageContainer">
      <div className="header">
        <h1>Let's explore some cards</h1>
        <p> kindly select below cards and watch them expand</p>
      </div>

      <div className="cardSection">
        {data.map((item, i) => (
          <div
            key={i}
            className={
              i === active ? "expanding-card active" : "expanding-card"
            }
            onClick={() => toggle(i)}
          >
            <img
              className="Expanding-card-imgage"
              src={item.url}
              alt="card image"
            />
            <div className="cardinfo">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpandingCards;
