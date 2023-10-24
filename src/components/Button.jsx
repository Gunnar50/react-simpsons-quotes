import React, { Component } from "react";

export default class Button extends Component {
	onLiked = () => {};
	onDeleted = () => {};

	render() {
		return (
			<button
				onClick={this.props.type === "like" ? this.onLiked : this.onDelete}
			>
				{this.props.text}
			</button>
		);
	}
}
