import React from "react";
import { Link } from "react-router-dom";
import starwar from "../../img/starwar.png";
import Favorites from "./Favorites";

const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-transparent mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"><img id="starWar-img" src={starwar} /></span>
			</Link>
			<Favorites />
		</nav>
	);
};

export default Navbar

