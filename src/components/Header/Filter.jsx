import React from "react";

const Filter = ({ filterType, onFilterChange }) => {
	return (
		<input
			placeholder={`Search by ${filterType ? filterType : "..."}`}
			type="text"
			id="filter"
			onInput={onFilterChange}
		/>
	);
};

export default Filter;
