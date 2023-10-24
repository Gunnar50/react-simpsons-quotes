import axios from "axios";
import React, { Component } from "react";

const API_URL = "https://thesimpsonsquoteapi.glitch.me/quotes";

class App extends Component {
	state = {};

	async componentDidMount() {
		try {
			const { data } = await axios.get(`${API_URL}?count=10`);
			this.setState({ simpsons: data });
		} catch (e) {
			console.log("Looks like the API is down!");
		}
	}

	render() {
		console.log(this.state);
		return <></>;
	}
}
