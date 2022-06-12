import React from "react";
import { Link } from "react-router-dom";
function Card({ image, city, id }) {
	return (
		<div>
			<img src={image} style={{ width: "350px" }} alt="Foto" />
			<h2>{city}</h2>
			<Link to={`/city/${id}`}>Ver Mas</Link>{" "}
			{/*RECORDAR QUE NO VAN LOS DOS PUNTOS */}
		</div>
	);
}
export default Card;
