import React from "react";

const Filter = ({ onFilterChange }) => {
  const [selectedFilter, setSelectedFilter] = React.useState("todos");

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const handleFilterClick = (filter) => {
    if (typeof onFilterChange === "function") {
      setSelectedFilter(filter);
      onFilterChange(filter);
    }
  };

  const filters = [
    "todos",
    "mecanico",
    "gasista",
    "plomero",
    "electricista",
    "carpintero",
  ];

  return (
<div className="flex flex-wrap justify-center tablet:w-[60%] tablet:ml-auto tablet:mr-auto laptop:flex-nowrap py-4">
      {filters.map((filter) => (
        <button
          key={filter}
          type="button"
          className={`${
            selectedFilter === filter
              ? "bg-[#1995AD] text-white"
              : "bg-white text-gray-900"
          } border border-gray-300 hover:bg-[#0001] hover:underline rounded-full w-[150px] text-base font-medium px-5 py-2.5 text-center me-3 mb-3`}
          onClick={() => handleFilterClick(filter)}
        >
          {capitalizeFirstLetter(filter)}
        </button>
      ))}
    </div>
  );
};

export default Filter;
