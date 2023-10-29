import React from "react";
import Button from "./Button";

const Controls = ({ id, liked, onLiked, onDelete }) => {
	return (
		<div className="controls">
			<Button text="Like" id={id} liked={liked} onCliked={onLiked} />
			<Button text="Delete" onCliked={onDelete} />
		</div>
	);
};

export default Controls;
