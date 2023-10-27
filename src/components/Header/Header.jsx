import React from "react";
import logo from "../../assets/images/The-Simpsons-Logo-PNG.png";
import Filter from "./Filter";
import Sort from "./Sort";

function Header(props) {
	return (
		<header>
			<div className="container">
				<img src={logo} />

				{/* sort component */}
				<Sort onSortSelectionChange={props.onSortSelectionChange} />

				{/* filter component */}
				<Filter
					onFilterChange={props.onFilterChange}
					onFilterSelectionChange={props.onFilterSelectionChange}
				/>

				<h2>Total liked count: {props.likedCount}</h2>
			</div>
		</header>
	);
}

export default Header;
