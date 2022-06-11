import React from "react";

function Card({ image, city }) {
	return (
		<div>
			<img src={image} style={{ width: "350px" }} alt="Foto" />
			<h2>{city}</h2>
		</div>
	);
}
export default Card;
