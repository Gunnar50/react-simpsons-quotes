import React from "react";

const Image = (props) => {
	const { image, alt } = props;
	return <img src={image} alt={alt} />;
};

export default Image;
