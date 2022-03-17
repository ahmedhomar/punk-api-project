import "./FiltersList.scss";

const FiltersList = ({ abvFilter, phFilter, classicRangeFilter }) => {
  return (
    <div className="filters-section">
      <p>Filter by:</p>
      <div className="filters-list">
        <div className="filtersList__filter">
          <input onClick={abvFilter} type="checkbox" id="abv" name="abv" />
          <label htmlFor="abv">High ABV ({">"} 6.0%)</label>
        </div>
        <div className="filtersList__filter">
          <input onClick={phFilter} type="checkbox" id="ph" name="ph" />
          <label htmlFor="ph">High Acidity (pH {"<"} 4.0%)</label>
        </div>
        <div className="filtersList__filter">
          <input
            onClick={classicRangeFilter}
            type="checkbox"
            id="cr"
            name="cr"
          />
          <label htmlFor="ph"> Classic Range (pH {"<"} 4.0%)</label>
        </div>
      </div>
    </div>
  );
};

export default FiltersList;
