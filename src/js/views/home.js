import React from "react";
import { Link } from "react-router-dom";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>ALL THE CARDS</h1>
		<p>
			HERE IS THE LIST OF THE STARWARSRBLOG!
		</p>
		<div className="ml-auto">
				<Link to="/descriptions">
					<button className="btn btn-primary">Favorites</button>
				</Link>
			</div>
	</div>
);
