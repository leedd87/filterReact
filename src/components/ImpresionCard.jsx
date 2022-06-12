import React from "react";
import Card from "./Card";

// const ImpresionCard = ({ arrayFiltrado }) => {
// 	return arrayFiltrado.map(
// 		<div key={arrayFiltrado.id}>
// 			<Card city={arrayFiltrado.city} image={arrayFiltrado.image} />
// 		</div>
// 	);
// };

function ImpresionCard({ arrayFiltrado }) {
	return (
		<>
			{/*RECORDAR EL FRAGMENT! o DIV */}
			{arrayFiltrado.map((element) => {
				return (
					<div key={element.id}>
						<Card
							city={element.city}
							image={element.image}
							id={element.id}
						/>
					</div>
				);
			})}
		</>
	);
}

export default ImpresionCard;
