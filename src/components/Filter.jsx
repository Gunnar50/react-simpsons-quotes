import React from "react";

const Filter = (props) => {
	return (
		<div className="filter">
			<input
				placeholder="Search by name"
				type="text"
				id="filter"
				onInput={props.onFilterChange}
			/>
		</div>
	);
};

export default Filter;
