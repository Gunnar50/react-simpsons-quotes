import axios from "axios";
import React, { Component } from "react";
import Card from "./components/Card";
import "./styles/App.scss";
import { addIDs } from "./utils/generateUniqueID";
import { sortData } from "./utils/sort";

const API_URL = "https://thesimpsonsquoteapi.glitch.me/quotes";

export default class App extends Component {
	state = { likedCount: 0, sort: "az" };

	updateCount = (newData) => {
		const newLikedCount = newData.reduce((count, character) => {
			return character.liked ? count + 1 : count;
		}, 0);
		return newLikedCount;
	};

	onLiked = (id) => {
		const newData = this.state.data.map((character) => {
			if (character.id === id) return { ...character, liked: !character.liked };

			return character;
		});
		const likedCount = this.updateCount(newData);
		this.setState({ data: newData, likedCount });
	};

	onDelete = () => {};

	onSortSelectionChange = (e) => {
		this.setState({ sort: e.target.value });
	};

	async componentDidMount() {
		try {
			const { data } = await axios.get(`${API_URL}?count=10`);
			const newData = addIDs(data);
			this.setState({ data: newData });
		} catch (e) {
			console.log("Looks like the API is down!");
		}
	}

	render() {
		const { data, likedCount, sort } = this.state;
		if (!data) return "Loading...";

		const _data = [...data];

		sortData(_data, sort);

		return (
			<div className="container">
				<div className="filter">
					<label htmlFor="sort">Sort by</label>
					<select name="sort" id="sort" onChange={this.onSortSelectionChange}>
						<option value="az">A to Z</option>
						<option value="za">Z to A</option>
					</select>
				</div>
				<h2>Total liked count: {likedCount}</h2>
				<div className="cards-container">
					{_data.map((character, i) => {
						return (
							<Card
								key={i}
								{...character}
								onLiked={this.onLiked}
								onDelete={this.onDelete}
							/>
						);
					})}
				</div>
			</div>
		);
	}
}
