import React from "react";

const Quote = (props) => {
	return (
		<p>
			<span>&#10077;</span>
			{props.quote}
		</p>
	);
};
export default Quote;
