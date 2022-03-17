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

  
    const getBeers = async (resultNumber) => {
      const res = await fetch(url + `?per_page=${resultNumber}`);
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

const filterBeers = beersArray.filter(result => {
  let beerHasMatched = true;

  if (searchTerm) {
    beerHasMatched = result.name.toLowerCase().includes(searchTerm);
  }

  if (abv) {
    beerHasMatched = beerHasMatched && result.abv > 6;
  }

  if (ph) {
    beerHasMatched = beerHasMatched && result.ph < 4;
  }

  return beerHasMatched;
});

 



  

  

  return (
    <div className="app">
      {console.log("app")}
      <Main beerCards={beers} />
    </div>
  );
};

export default App;

/* 

/* const InputExample = () => {
  const [text, setText] = useState("");
  const handleChange = (event) => {
    setText(event.target.value);
  };
  return <input type="text" value={text} onChange={handleChange} />;
}; */

/* function Checkbox(props) { 
  
  const [checked, setChecked] = useState(false); 
  const checkedText = props.onText; 
  const uncheckedText = props.offText; 
  const togglePreference = props.togglePreference; 
  const animal = props.animal; 
  const handleChange = () => { 
    
    setChecked(!checked); 
    togglePreference(animal); 
    
  }; 
  
  return ( 
    
    <div> 
    
       
      
      <p>
        {checked ? checkedText : uncheckedText}
      </p> 
      
    </div> 
    
  ); 
  
};  */

/* const ExploreAlbums = props => {
  const { albumsArr } = props;
  const [searchTerm, setSearchTerm] = useState("");

  

  const filteredAlbums = albumsArr.filter(album => {
    const albumTitleLower = album.strAlbum.toLowerCase();

    return albumTitleLower.includes(searchTerm) && album.strAlbumThumb;
  }); 
  
  **filter

  const highestRating = albums.filter(album => album.intScore).sort((a, b) => b.intScore - a.intScore);
  
  const imagesArr = albumsArr.filter(album => album.strAlbumThumb).map(album => album.strAlbumThumb);



  const ArtistTile = props => {
  const { imgSrc, title, text } = props;
  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    setShowText(!showText);
  };

  const buttonJSX = (
    <div className="artist-tile__content artist-tile__content--button">
      <h3 className="artist-tile__heading">{title}</h3>
      <div onClick={handleClick}>
        <Button buttonText={"Find out more"} isSecondary={true} />
      </div>
    </div>
  );

  const textJSX = (
    <div className="artist-tile__content artist-tile__content--text">
      <img src={whiteCross} className="artist-tile__cross" onClick={handleClick} alt="Close text" />
      <h3 className="artist-tile__heading">{title}</h3>
      {text.split(".").map((sentence,index) => (
        <p key={title + index}>{sentence + "."}</p>
      ))}
    </div>
  );

  return (
    <div className="artist-tile">
      <img src={imgSrc} className="artist-tile__img" alt={props.title} />
      {showText ? textJSX : buttonJSX}
    </div>
  );
};

const Nav = props => {
  const { userName, handleSubmit } = props;
  const [showSettings, setShowSettings] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <nav className="nav">
      {showSettings && <SettingsMenu userName={userName} toggleSettings={toggleSettings} handleSubmit={handleSubmit}/>}
      {showNav && <NavMenu toggleNav={toggleNav} />}

      <img src={menu} className="nav__item nav__item--menu" alt="menu icon" onClick={toggleNav} />
      <h2 className="nav__heading">Ear Worm</h2>
      <img src={settings} className="nav__item" alt="settings icon" onClick={toggleSettings} />
    </nav>
  );
};


  
  */













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
