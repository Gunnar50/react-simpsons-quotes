import React from "react";

const Filter = (props) => {
	return (
		<div className="filter">
			<label htmlFor="filter">Search by name</label>
			<input type="text" id="filter" onInput={props.onFilterChange} />
		</div>
	);
};

export default Filter;
