import "./SiteContainer.scss";
import Main from "../Main/Main";
import Nav from "../Nav/Nav";

const SiteContainer = ({ beerCards }) => {
  return (
    <div className="site-container">
      <Main />
      <Nav />
    </div>
  );
};

export default SiteContainer;
