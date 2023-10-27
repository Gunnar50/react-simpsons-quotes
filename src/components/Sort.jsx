import React from "react";

const Sort = (props) => {
	return (
		<div className="filter">
			<label htmlFor="sort">Sort by</label>
			<select name="sort" id="sort" onChange={props.onSortSelectionChange}>
				<option value="name-az">Name - A to Z</option>
				<option value="name-za">Name - Z to A</option>
				<option value="quote-az">Quote - A to Z</option>
				<option value="quote-za">Quote - Z to A</option>
			</select>
		</div>
	);
};

export default Sort;
