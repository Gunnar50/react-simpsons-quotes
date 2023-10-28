import React from "react";

const Button = (props) => {
	const { text, id, onCliked, liked } = props;

	return (
		<button
			className={`${text.toLowerCase()}${liked ? " liked" : ""}`}
			onClick={() => onCliked(id)}
		>
			{liked ? `Unlike` : text}
		</button>
	);
};

export default Button;
