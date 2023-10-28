import React from "react";
import "../../styles/Header.scss";
import Filter from "./Filter";
import FilterBy from "./FilterBy";
import Sort from "./Sort";

function Inputs(props) {
	return (
		<div className="inputs-container">
			{/* filter component */}
			<Filter
				onFilterChange={props.onFilterChange}
				onFilterSelectionChange={props.onFilterSelectionChange}
				filterType={props.filterType}
			/>

			{/* filter by component */}
			<FilterBy onFilterSelectionChange={props.onFilterSelectionChange} />

			{/* sort component */}
			<Sort onSortSelectionChange={props.onSortSelectionChange} />
		</div>
	);
}

export default Inputs;
