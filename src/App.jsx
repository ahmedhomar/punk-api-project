import { useEffect, useState } from "react";
import "./App.scss";
// import beers from "./assets/data/beers.js";
import Main from "./components/Main/Main";

const App = () => {
  const [beers, setBeers] = useState([]);
  const [numberOfBeers, setNumberOfBeers] = useState(6);

  const url = "https://api.punkapi.com/v2/beers";

  const getBeers = async (resultNumber) => {
    const res = await fetch(url + `?per_page=${resultNumber}`);
    const data = await res.json();
    console.log(data);
    setBeers(data);
  };

  useEffect(() => {
    getBeers(numberOfBeers);
  }, [numberOfBeers]);

  //  const handleInputChange = (event) => {
  //    setNumberOfUsers(event.target.value);
  //  };

  return (
    <div className="app">
      {console.log("app")}
      {<Main beerCards={beers} />}
    </div>
  );
};

export default App;

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
