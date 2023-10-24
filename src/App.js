import axios from "axios";
import React, { Component } from "react";
import "./App.css";
import Card from "./components/Card";

const API_URL = "https://thesimpsonsquoteapi.glitch.me/quotes";

export default class App extends Component {
	state = {};

	async componentDidMount() {
		try {
			const { data } = await axios.get(`${API_URL}?count=10`);
			this.setState({ data });
		} catch (e) {
			console.log("Looks like the API is down!");
		}
	}

	render() {
		if (!this.state.data) return "Loading...";
		return (
			<div className="container">
				<Card data={this.state.data} />
			</div>
		);
	}
}
