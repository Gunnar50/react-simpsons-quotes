import React from "react";

const Sort = (props) => {
	return (
		<div className="sort">
			<select name="sort" id="sort" onChange={props.onSortSelectionChange}>
				<option value="sort-by" disabled>
					-- Sort by --
				</option>
				<option value="name-az">Name - A to Z</option>
				<option value="name-za">Name - Z to A</option>
				<option value="quote-az">Quote - A to Z</option>
				<option value="quote-za">Quote - Z to A</option>
			</select>
		</div>
	);
};

export default Sort;
