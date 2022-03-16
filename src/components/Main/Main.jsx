import CardList from "../CardList/CardList";

const Main = ({ beerCards }) => {
  return (
    <div className="main">
      <CardList beerCards={beerCards} />
    </div>
  );
};

export default Main;
