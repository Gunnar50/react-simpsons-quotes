import React from "react";

const Filter = (props) => {
	return (
		<input
			placeholder={`Search by ${props.filterType ? props.filterType : "..."}`}
			type="text"
			id="filter"
			onInput={props.onFilterChange}
		/>
	);
};

export default Filter;
