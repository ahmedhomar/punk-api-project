import React from "react";
import "./Card.scss";

const Card = ({ name, tagline, image_url, first_brewed, ph, abv }) => {
  console.log("card comp");

  return (
    <div className="beers__card">
      <img src={image_url} className="beers__card__img" alt="" />
      <h3 className="beers__card__heading">{name}</h3>
      <p className="beers__card__tagline">{tagline}</p>
      <p>
        Brewed in: <b>{first_brewed}</b>
      </p>
      <h5>Ph: {ph}</h5>
      <h5>Abv: {abv}</h5>
    </div>
  );
};

export default Card;
