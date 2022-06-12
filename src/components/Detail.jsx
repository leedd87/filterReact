import { useParams } from "react-router-dom";
import dataObjeto from "../dataObjeto";
import CardDetail from "./CardDetail";

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
			<CardDetail ciudad={ciudad} />
		</>
	);
}

export default Detail;
