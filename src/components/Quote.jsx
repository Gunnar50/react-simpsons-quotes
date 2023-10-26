import React, { Component } from "react";

export default class Quote extends Component {
	render() {
		return (
			<p>
				<span>&#10077;</span>
				{this.props.quote}
			</p>
		);
	}
}
