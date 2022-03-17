import "./FilterItem.scss";
const FilterItem = ({ label, handleClick }) => {
  return (
    <div>
      <label>
        <input type="checkbox" onClick={handleClick} />
        {label}
      </label>
    </div>
  );
};

// function as prop / onClick
// checked or not
export default FilterItem;
