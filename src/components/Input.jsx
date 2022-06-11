import React from "react";
// import data from "../data";
import { useState, useEffect } from "react";
import NoSeEncontro from "./NoSeEncontro";
import ImpresionCard from "./ImpresionCard";
import dataObjeto from "../dataObjeto";

function Input() {
	const [searchInput, setSearchInput] = useState("");

	const handleChange = (e) => {
		setSearchInput(e.target.value);
	};

	useEffect(() => {
		fetch("./data.json")
			.then((res) => res.json())
			.then((res) => console.log(res));
	}, []);

	// console.log(dataObjeto);

	const dataArray = [];

	dataObjeto.map((ciudad) => {
		return ciudad.cities.map((element) => {
			return dataArray.push(element);
		});
	});

	console.log(dataArray);

	// const filter = dataArray.filter((elemento) => {
	// 	if (elemento === "") {
	// 		return elemento;
	// 	} else if (
	// 		elemento.city.toLowerCase().startsWith(searchInput.toLowerCase())
	// 	) {
	// 		return elemento;
	// 	} else {
	// 		return null;
	// 	}
	// });

	const filter = dataArray.filter((elemento) => {
		if (elemento.city.toLowerCase().startsWith(searchInput.toLowerCase())) {
			return elemento;
		}
	});

	return (
		<>
			<input type="text" name="name" onKeyUp={handleChange}></input>

			{filter.length > 0 ? (
				<ImpresionCard arrayFiltrado={filter} />
			) : (
				<NoSeEncontro />
			)}
			{/* {data
				.filter((filtrado) => {
					if (filtrado === "") {
						return filtrado; //no filtres nada
					} else if (
						filtrado.city
							.toLowerCase()
							.startsWith(searchInput.toLowerCase())
					) {
						return filtrado;

						//si no se cumplen ninguna de las condiciones no devuelve nada - se le agrega porque el metodo filter siempre debe devolver algo
					} else {
						return null;
					}
				}) */}

			{/* <ImprecionCard arrayFiltrado={filtrado}/> */}

			{/* filtrado.map((element, key) => {
					return (
				
				})} */}
		</>
	);
}

// filtrado.lenght > 0 ? <ImprecionCard /> : <h1>NO ENCONTRE</h1>;

export default Input;
