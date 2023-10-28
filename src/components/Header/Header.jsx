import React from "react";
import logo from "../../assets/images/The-Simpsons-Logo-PNG.png";
import "../../styles/Header.scss";
import Button from "../Button";
import Image from "../Image";
import Inputs from "./Inputs";

const Header = (props) => {
	return (
		<header>
			<div className="container">
				<Image image={logo} alt="Logo" />
				<Inputs
					onSortSelectionChange={props.onSortSelectionChange}
					onFilterChange={props.onFilterChange}
					onFilterSelectionChange={props.onFilterSelectionChange}
					filterType={props.filterType}
				/>

				<div className="sec-2">
					<h2>Total liked count: {props.likedCount}</h2>
					<Button text="Generate New Quotes" onCliked={props.generateQuotes} />
				</div>
			</div>
		</header>
	);
};

export default Header;
