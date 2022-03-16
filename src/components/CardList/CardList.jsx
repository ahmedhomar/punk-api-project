import Card from "../Card/Card";
import "./CardList.scss";

const CardList = ({ beerCards }) => {
  console.log(beerCards);
  // make one card for each beer
  const beerCardJSX = beerCards.map((beer) => {
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
