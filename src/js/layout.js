import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./views/home";
import injectContext from "./store/appContext";
import Navbar from "./component/Navbar";
import { DetailCharacters } from "./views/detailCharacters";
import { DetailPlanets } from "./views/detailPlanets";
import { DetailVehicles } from "./views/detailVehicles";




//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div id="home">
			<BrowserRouter basename={basename}>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/character/:uid" element={<DetailCharacters />} />
					<Route path="/planet/:uid" element={<DetailPlanets />} />
					<Route path="/vehicle/:uid" element={<DetailVehicles />} />
					<Route path="*" element={<h1>Not found!</h1>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
