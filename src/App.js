// import { useState } from "react";
import "./App.css";
// import data from "./data";
// import Card from "./components/Card";
import Input from "./components/Input";
import { Routes, Route } from "react-router-dom";
import Detail from "./components/Detail";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path={"/"} element={<Input />} />
				<Route path={"/cities"} element={<Input />} />
				<Route path={`/city/:id`} element={<Detail />} />

				{/* <a href="hola">botonArriba</a> */}
			</Routes>
		</div>
	);
}

export default App;
