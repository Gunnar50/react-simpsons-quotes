import React from "react";
import Card from "./Card";

const Main = ({ filtered, onLiked, onDelete }) => {
	return (
		<main>
			<div className="container">
				<div className="cards-container">
					{filtered.map((character, i) => {
						return (
							<Card
								key={i}
								{...character}
								onLiked={onLiked}
								onDelete={onDelete}
							/>
						);
					})}
				</div>
			</div>
		</main>
	);
};

export default Main;
