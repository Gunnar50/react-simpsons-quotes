import React from "react";

const FilterBy = ({ onFilterSelectionChange }) => {
	return (
		<select
			name="filter-type"
			id="filter-type"
			onChange={onFilterSelectionChange}
		>
			<option value="">-- Search by --</option>
			<option value="name">Name</option>
			<option value="quote">Quote</option>
		</select>
	);
};

export default FilterBy;
