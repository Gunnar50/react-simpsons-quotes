import React, { Component } from "react";
import "../App.css";
import Controls from "./Controls";
import Image from "./Image";
import Name from "./Name";
import Quote from "./Quote";

export default class Character extends Component {
	render() {
		return (
			<div className="card-inner">
				<Name name={this.props.character} />
				<Image
					image={this.props.image}
					alt={this.props.character}
					direction={this.props.characterDirection}
				/>
				<Quote quote={this.props.quote} />
				<Controls />
			</div>
		);
	}
}
