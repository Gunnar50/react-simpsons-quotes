import axios from "axios";
import React, { Component } from "react";
import Card from "./components/Card";
import Header from "./components/Header/Header";
import "./styles/App.scss";
import { filterByName } from "./utils/filter";
import { addIDs } from "./utils/generateUniqueID";
import { sortData } from "./utils/sort";

const API_URL = "https://thesimpsonsquoteapi.glitch.me/quotes";

export default class App extends Component {
	state = { likedCount: 0, filter: "" };

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

	onFilterChange = (e) => {
		this.setState({ filter: e.target.value });
	};

	onFilterSelectionChange = (e) => {
		this.setState({ filterType: e.target.value });
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
		const { data, likedCount, sort, filter, filterType } = this.state;
		if (!data) return "Loading...";

		const _data = [...data];

		const filtered = filterByName(_data, filter, filterType);

		sortData(filtered, sort);

		return (
			<>
				<Header
					onSortSelectionChange={this.onSortSelectionChange}
					onFilterChange={this.onFilterChange}
					onFilterSelectionChange={this.onFilterSelectionChange}
					likedCount={likedCount}
				/>
				<main>
					<div className="container">
						<div className="cards-container">
							{filtered.map((character, i) => {
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
				</main>
			</>
		);
	}
}
