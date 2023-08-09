import React from "react";
import { Link } from "react-router-dom";
import starwar from "../../img/starwar.png";

const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"><img id="starWar-img" src={starwar} /></span>
			</Link>
			<div className="dropdown">
				<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites
				</button>
			</div>
		</nav>
	);
};

export default Navbar
