import React, { Component } from "react";
import Button from "./Button";

export default class Controls extends Component {
	render() {
		return (
			<>
				<Button text="Like" type="like" />
				<Button text="Delete" type="delete" />
			</>
		);
	}
}
