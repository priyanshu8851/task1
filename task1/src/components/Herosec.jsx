import React from "react";
import "./herosec.css";
import Card from "./Card";
import cards from "../utils/card.js";
const Herosec = () => {
  return (
    <>
      <div className="herosec main">
        <div className="container">
          <div className="heading">
            <h1>User Profiles</h1>
          </div>
          <div className="cards-area">
            {cards.map((card,index) => {
              return<Card key={index} name={card.name} number={card.contact} gender={card.gender} img={card.img}/>;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Herosec;
