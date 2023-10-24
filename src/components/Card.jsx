import React, { Component } from "react";
import "../App.css";
import Character from "./Character";

export default class Card extends Component {
	render() {
		console.log(this.props.data);
		return this.props.data.map((character) => (
			<div className="card">
				<Character {...character} />
			</div>
		));
	}
}
