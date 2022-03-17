import { useEffect, useState } from "react";
import "./App.scss";
// import beers from "./assets/data/beers.js";

import Nav from "./components/Nav/Nav";
import CardList from "./components/CardList/CardList";
import SearchBox from "./components/SearchBox/SearchBox";
import FiltersList from "./components/FiltersList/FiltersList";

const App = () => {
  const [beersArr, setBeersArr] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [ph, setPh] = useState(false);
  const [abv, setAbv] = useState(false);
  const [classicRange, setClassicRange] = useState(false);
  const [numberOfBeers, setNumberOfBeers] = useState(6);

  const url = "https://api.punkapi.com/v2/beers?per_page=80";

  const getBeers = async (beerNumber) => {
    const res = await fetch(url);
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
      <Nav />
      <SearchBox handleInput={handleInput} searchTerm={searchTerm} />
      <FiltersList
        abvFilter={abvFilter}
        phFilter={phFilter}
        classicRangeFilter={classicRangeFilter}
      />
      <CardList beersArr={filterBeers} />
    </div>
  );
};

export default App;
