import React, { useState } from "react";
import "./SiteContainer.scss";

const InputExample = () => {
  const [text, setText] = useState("");
  const handleChange = (event) => {
    setText(event.target.value);
  };
  return <input type="text" value={text} onChange={handleChange} />;
};

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

  const handleInput = event => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };

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
