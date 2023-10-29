import React from "react";
import "../../styles/Header.scss";
import Filter from "./Filter";
import FilterBy from "./FilterBy";
import Sort from "./Sort";

const Inputs = ({
	onFilterChange,
	onFilterSelectionChange,
	filterType,
	onSortSelectionChange,
}) => {
	return (
		<div className="inputs-container">
			{/* filter component */}
			<Filter onFilterChange={onFilterChange} filterType={filterType} />

			{/* filter by component */}
			<FilterBy onFilterSelectionChange={onFilterSelectionChange} />

			{/* sort component */}
			<Sort onSortSelectionChange={onSortSelectionChange} />
		</div>
	);
};

export default Inputs;
