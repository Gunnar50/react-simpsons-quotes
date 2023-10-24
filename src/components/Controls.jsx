import React, { Component } from "react";
import "../App.css";
import Button from "./Button";

export default class Controls extends Component {
	render() {
		return (
			<div className="controls">
				<Button text="Like" type="like" />
				<Button text="Delete" type="delete" />
			</div>
		);
	}
}
