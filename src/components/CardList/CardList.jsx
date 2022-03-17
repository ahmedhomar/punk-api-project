import Card from "../Card/Card";
import "./CardList.scss";

const CardList = ({ beersArr }) => {
  console.log(beersArr);
  // make one card for each beer
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

  return <main className="main">{beersArrJSX}</main>;
};

export default CardList;
