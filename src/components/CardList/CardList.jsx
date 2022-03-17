import Card from "../Card/Card";
import "./CardList.scss";

const CardList = ({ beersArr }) => {
  const beersArrJSX = beersArr.map((beer) => {
    return (
      <Card
        key={beer.id}
        name={beer.name}
        image_url={beer.image_url}
        first_brewed={beer.first_brewed}
        tagline={beer.tagline}
        ph={beer.ph}
        abv={beer.abv}
      />
    );
  });

  return <div className="card-list">{beersArrJSX}</div>;
};

export default CardList;
