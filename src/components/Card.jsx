import React, { Component } from "react";
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
				<div className="image">
					<Image image={image} alt={name} />
				</div>

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
			</div>
		);
	}
}
