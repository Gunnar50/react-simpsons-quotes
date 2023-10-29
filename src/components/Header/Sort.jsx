import React from "react";

const Sort = ({ onSortSelectionChange }) => {
	return (
		<select name="sort" id="sort" onChange={onSortSelectionChange}>
			<option value="sort-by">-- Sort by --</option>
			<option value="name-az">Name - A to Z</option>
			<option value="name-za">Name - Z to A</option>
			<option value="quote-az">Quote - A to Z</option>
			<option value="quote-za">Quote - Z to A</option>
		</select>
	);
};

export default Sort;
