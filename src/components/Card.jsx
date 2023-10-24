import React, { Component } from "react";
import Character from "./Character";

export default class Card extends Component {
	render() {
		console.log(this.props.data);
		return this.props.data.map((character) => <Character {...character} />);
	}
}
