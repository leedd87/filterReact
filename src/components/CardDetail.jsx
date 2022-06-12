import React from "react";

const CardDetail = ({ ciudad }) => {
	return (
		<>
			<h1>Detail {ciudad[0].id}</h1>
			<h2>{ciudad[0].city}</h2>
			<p>{ciudad[0].description}</p>
			<img src={ciudad[0].image} alt={ciudad[0].city} />
		</>
	);
};

export default CardDetail;
