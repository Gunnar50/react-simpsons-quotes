import React from "react";
import Button from "./Button";

const Controls = (props) => {
	const { id, liked, onLiked, onDelete } = props;
	return (
		<div className="controls">
			<Button text="Like" id={id} liked={liked} onCliked={onLiked} />
			<Button text="Delete" onCliked={onDelete} />
		</div>
	);
};

export default Controls;
