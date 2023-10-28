import React from "react";
import Card from "./Card";

const Main = (props) => {
	return (
		<main>
			<div className="container">
				<div className="cards-container">
					{props.filtered.map((character, i) => {
						return (
							<Card
								key={i}
								{...character}
								onLiked={props.onLiked}
								onDelete={props.onDelete}
							/>
						);
					})}
				</div>
			</div>
		</main>
	);
};

export default Main;
