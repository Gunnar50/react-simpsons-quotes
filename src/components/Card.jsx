import React from "react";
import Controls from "./Controls";
import Image from "./Image";
import Name from "./Name";
import Quote from "./Quote";

const Card = ({
	character: name,
	image,
	characterDirection,
	quote,
	id,
	liked,
	onLiked,
	onDelete,
}) => {
	return (
		<div className={`card ${characterDirection.toLowerCase()}`}>
			<div className="image">
				<Image image={image} alt={name} />
			</div>

			<div className="quote">
				<Quote quote={quote} />
				<Name name={name} />
				<Controls id={id} liked={liked} onLiked={onLiked} onDelete={onDelete} />
			</div>
		</div>
	);
};

export default Card;
