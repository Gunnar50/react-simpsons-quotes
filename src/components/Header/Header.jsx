import React from "react";
import logo from "../../assets/images/The-Simpsons-Logo-PNG.png";
import "../../styles/Header.scss";
import Button from "../Button";
import Image from "../Image";
import Inputs from "./Inputs";

const Header = ({
	onSortSelectionChange,
	onFilterChange,
	onFilterSelectionChange,
	filterType,
	likedCount,
	generateQuotes,
}) => {
	return (
		<header>
			<div className="container">
				<Image image={logo} alt="Logo" />
				<Inputs
					onSortSelectionChange={onSortSelectionChange}
					onFilterChange={onFilterChange}
					onFilterSelectionChange={onFilterSelectionChange}
					filterType={filterType}
				/>

				<div className="sec-2">
					<h2>Total liked count: {likedCount}</h2>
					<Button text="Generate New Quotes" onCliked={generateQuotes} />
				</div>
			</div>
		</header>
	);
};

export default Header;
