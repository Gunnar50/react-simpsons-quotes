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

			<select
				name="filter-type"
				id="filter-type"
				onChange={props.onFilterSelectionChange}
			>
				<option value="filter-by">-- Filter by --</option>
				<option value="name-filter">Name</option>
				<option value="quote-filter">Quote</option>
			</select>
		</div>
	);
};

export default Filter;
