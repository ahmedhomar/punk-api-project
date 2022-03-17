import "./FiltersList.scss";
import FilterItem from "../FilterItem/FilterItem";

const FiltersList = (/* { beerCards } */) => {
  /* const phFilter = beerCards.filter((beer) => beer[0].ph < 4);
  console.log(phFilter); */

  return (
    <div className="filter-list">
      <div className="filter-item-container">
        <FilterItem />
        <FilterItem />
        <FilterItem />
      </div>
    </div>
  );
};

export default FiltersList;
