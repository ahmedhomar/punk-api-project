import { useEffect, useState } from "react";
import "./App.scss";
// import beers from "./assets/data/beers.js";
import Main from "./components/Main/Main";
import Nav from "./components/Nav/Nav";

const App = () => {
  const [beersArr, setBeersArr] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [ph, setPh] = useState(false);
  const [abv, setAbv] = useState(false);
  const [classicRange, setClassicRange] = useState(false);
  const [numberOfBeers, setNumberOfBeers] = useState(6);

  const url = "https://api.punkapi.com/v2/beers";

  const getBeers = async (beerNumber) => {
    const res = await fetch(url + `?per_page=${beerNumber}`);
    const data = await res.json();
    console.log(data);
    setBeersArr(data);
  };

  useEffect(() => {
    getBeers(numberOfBeers);
  }, [numberOfBeers]);

  const phFilter = () => {
    setPh(!ph);
  };

  const abvFilter = () => {
    setAbv(!abv);
  };

  const classicRangeFilter = () => {
    setClassicRange(!classicRange);
  };

  const handleInput = (event) => {
    const inputValue = event.target.value.toLowerCase();
    setSearchTerm(inputValue);
    setNumberOfBeers(event.target.value);
  };

  const filterBeers = beersArr.filter((beer) => {
    let beerMatched = true;
    let classicDateArr = ["2", "0", "1", "0"];

    if (searchTerm) {
      beerMatched = beer.name.toLowerCase().includes(searchTerm);
    }

    if (abv) {
      beerMatched = beerMatched && beer.abv > 6;
    }

    if (ph) {
      beerMatched = beerMatched && beer.ph < 4;
    }

    if (classicRange) {
      beerMatched =
        beerMatched &&
        beer.first_brewed.split("").splice(3, 4) < classicDateArr;
    }

    return beerMatched;
  });

  return (
    <div className="app">
      {console.log("app")}
      <Main beersArr={beersArr} />
      <Nav beersArr={filterBeers} />
    </div>
  );
};

export default App;
