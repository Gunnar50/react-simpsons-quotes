import React, { Component } from "react";

export default class Button extends Component {
	render() {
		const { text, id, onCliked, liked } = this.props;

		return (
			<button
				className={`${text.toLowerCase()}${liked ? " liked" : ""}`}
				onClick={() => onCliked(id)}
			>
				{liked ? `Unlike` : text}
			</button>
		);
	}
}
