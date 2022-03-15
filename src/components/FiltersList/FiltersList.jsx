import "./FiltersList.scss";
import FilterItem from "../FilterItem/FilterItem";

const FiltersList = ({}) => {
  return (
    <div className="filter-list">
      <div className="filter-item-container">
        <FilterItem />
      </div>
    </div>
  );
};

export default FiltersList;
