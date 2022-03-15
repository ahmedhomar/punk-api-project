import "./FilterItem.scss";
const FilterItem = () => {
  return (
    <div>
      <label>
        <input type="checkbox" />
        {`High ABV (> 6.0%)`}
      </label>
      <label>
        <input type="checkbox" />
        Classic Range
      </label>
      <label>
        <input type="checkbox" />
        {`Acidity (pH < 4)`}
      </label>
    </div>
  );
};
