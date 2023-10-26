import React, { Component } from "react";
import "../styles/App.scss";
import Controls from "./Controls";
import Image from "./Image";
import Name from "./Name";
import Quote from "./Quote";

export default class Card extends Component {
	render() {
		const {
			character: name,
			image,
			characterDirection,
			quote,
			id,
			liked,
			onLiked,
			onDelete,
		} = this.props;
		return (
			<div className={`card ${characterDirection.toLowerCase()}`}>
				{console.log(characterDirection)}
				{characterDirection === "Left" && (
					<div className="image">
						<Image image={image} alt={name} />
					</div>
				)}

				<div className="quote">
					<Quote quote={quote} />
					<Name name={name} />
					<Controls
						id={id}
						liked={liked}
						onLiked={onLiked}
						onDelete={onDelete}
					/>
				</div>

				{characterDirection === "Right" && (
					<div className="image">
						<Image image={image} alt={name} />
					</div>
				)}
			</div>
		);
	}
}
