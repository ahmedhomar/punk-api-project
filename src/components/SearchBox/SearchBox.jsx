import "./SearchBox.scss";

const SearchBox = ({ searchTerm, handleInput }) => {
  return (
    <div className="search-box">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInput}
        className="search-box__input"
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBox;
