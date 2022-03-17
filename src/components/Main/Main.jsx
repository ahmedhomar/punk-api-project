import CardList from "../CardList/CardList";

const Main = ({ beersArr, filterBeers }) => {
  return (
    <div className="main">
      <CardList beersArr={filterBeers} />
    </div>
  );
};

export default Main;
