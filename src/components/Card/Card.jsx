import React from "react";
import "./Card.scss";

const Card = ({ name, tagline, description, image_url }) => {
  console.log("card comp");

  return (
    <>
      <div className="beer-info">
        <img className="beer-info__img" src={image_url} alt={name} />
      </div>
      <div className="beer-info__content">
        <h2 className="beer-info__heading"> {name}</h2>
        <h3 className="beer-info__tag"> {tagline}</h3>
        <p className="beer-info__desc"> {description}</p>
      </div>
    </>
  );
};

export default Card;
