import { useState } from "react";
import "./App.css";
import data from "./data";
import Card from "./components/Card";

function App() {
	const [searchInput, setSearchInput] = useState("");

	const handleChange = (e) => {
		console.log(e.target.value);
		setSearchInput(e.target.value);
	};

	return (
		<div className="App">
			<input type="text" name="name" onChange={handleChange}></input>
			{data
				.filter((filtrado) => {
					if (filtrado === "") {
						return filtrado; //no filtres nada
					} else if (
						filtrado.city
							.toLowerCase()
							.startsWith(searchInput.toLowerCase())
					) {
						return filtrado;
					} else {
						return null; //si no se cumplen ninguna de las condiciones no devuelve nada - se le agrega porque el metodo filter siempre debe devolver algo
					}
				})
				.map((element, key) => {
					return (
						<div key={key}>
							<Card city={element.city} image={element.image} />
						</div>
					);
				})}
		</div>
	);
}

export default App;
