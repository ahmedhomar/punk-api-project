import "./Main.scss";
import CardList from "../CardList/CardList";

const Main = ({ beersArr }) => {
  return (
    <div className="main">
      <CardList beersArr={beersArr} />
    </div>
  );
};

export default Main;
