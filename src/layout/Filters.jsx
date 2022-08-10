import Filter from "../components/Filter";
import FilterByName from "../components/FilterByName";

const Filters = ({ handleSearchByName  }) => {
  return (
    <div className="filters">
      <FilterByName type="Name" handleSearchByName={handleSearchByName} />
      <Filter type="Author" />
      <Filter type="Created" />
      <Filter type="Location" />
    </div>
  );
};

export default Filters;
