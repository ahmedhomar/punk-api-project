import "./Nav.scss";

const Nav = () => {
  return (
    <div className="nav">
      <h3>Punk API</h3>
    </div>
  );
};

export default Nav;

/* import SearchBox from "../../components/SearchBox/SearchBox";
import AlbumTiles from "../../components/AlbumTiles/AlbumTiles";

const ExploreAlbums = props => {
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

  return (
    <>
      <SearchBox label={"albums"} searchTerm={searchTerm} handleInput={handleInput} />
      <AlbumTiles title={"Results"} albumsArr={filteredAlbums} />
    </>
  );
}; */
