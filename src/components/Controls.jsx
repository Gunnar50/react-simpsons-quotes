import React, { Component } from "react";
import "../styles/App.scss";
import Button from "./Button";

export default class Controls extends Component {
	render() {
		const { id, liked, onLiked, onDelete } = this.props;
		return (
			<div className="controls">
				<Button text="Like" id={id} liked={liked} onCliked={onLiked} />
				<Button text="Delete" onCliked={onDelete} />
			</div>
		);
	}
}
