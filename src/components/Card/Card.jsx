import React from "react";
import "./Card.scss";

const Card = ({ name, tagline, image_url, first_brewed, ph, abv }) => {
  console.log("card comp");

  return (
   
<div className="beer-card">
<img className="beer-card__img" src={image_url} alt={name} />

<h3 className="beer-card__heading"> {name}</h3>
<p className="beer-card__tag"> {tagline}</p>

<p>Brewed in: {first_brewed} </p>
<h5>Ph: {ph}</h5>
<h5>Abv: {abv}</h5>
<div/>
 
  )
};



export default Card;



