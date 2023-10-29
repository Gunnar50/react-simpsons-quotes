import React from "react";

const Button = ({ text, id, onCliked, liked }) => {
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
