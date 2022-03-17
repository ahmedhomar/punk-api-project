import { useEffect, useState } from "react";
import "./App.scss";
// import beers from "./assets/data/beers.js";
import Main from "./components/Main/Main";

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
      setPh(!ph)
  }

  const AbvFilter = () => {
      setAbv(!abv)
  }

  const classicRangeFilter = () => {
    setClassicRange(!classicRange)
}

const handleInput = event => {
  const inputValue = event.target.value.toLowerCase();
  setSearchTerm(inputValue);
  setNumberOfUsers(event.target.value);
}

const filterBeers = beersArr.filter(beer => {
  let beerMatched = true;
  let classicDateArr = ['2', '0','1','0'];

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
    beerMatched = beerMatched && beer.first_brewed.split('').splice(3,4) < classicDateArr;
  }

  return beerMatched;
});


  

  return (
    <div className="app">
      {console.log("app")}
      <Main beerCards={beersArr} />
    </div>
  );
};

export default App;














/* brewed before 2010
https://api.punkapi.com/v2/beers?brewed_before=01-2010


Ph < 4


*/
 */
/* 
Step 1: Break The UI Into A Component Hierarchy:

Site-Container
       Main
            CardList
                   Card

       Nav
         SearchBox

         FiltersList
              FilterItem
---------------------------------------------
Step 2: Build A Static Version in React

Use array from beers.js 
---------------------------------------------
Step 3: Identify The Minimal (but complete) Representation Of UI State:

Our state is:

1.The search text the user has entered

2.The value of the checkbox (FilterItem / FilterList)

3.Beer cards
---------------------------------------------
Step 4: Identify Where Your State Should Live

Common owner component for SearchBox, checkbox (FilterItem / FilterList) and beer cards is App.

---------------------------------------------
Step 5: Add Inverse Data Flow

Nav will pass callbacks to SearchBox that will fire whenever the state should be updated. 

Use the onChange event on the inputs to be notified of it. 

The callbacks passed by Nav will call setState(), and the app will be updated.

.thinking in React
.codealong
.ticket-tracker
.api codealong

*/
