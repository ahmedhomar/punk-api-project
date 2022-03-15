import Card from "../Card/Card";
import "./CardList.scss";

const CardList = ({ beers }) => {
  // make one card for each beer
  const beerCardJSX = beers.map((beer) => {
    return (
      <Card
        name={beer.name}
        image_url={beer.image_url}
        description={beer.description}
        tagline={beer.tagline}
      />
    );
  });

  return <div className="card-list">{beerCardJSX}</div>;
};

export default CardList;
