import { useParams } from "react-router-dom";
import dataObjeto from "../dataObjeto";

function Detail() {
	const { id } = useParams();

	const dataArray = [];

	dataObjeto.map((ciudad) => {
		return ciudad.cities.map((element) => {
			return dataArray.push(element);
		});
	});

	console.log(dataArray);

	let ciudad = dataArray.filter((element) => element.id === Number(id));
	console.log(ciudad);

	return (
		<>
			<h1>Detail {ciudad[0].id}</h1>
			<h2>{ciudad[0].city}</h2>
		</>
	);
}

export default Detail;
