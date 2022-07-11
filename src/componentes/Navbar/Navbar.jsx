import React from "react";
import "./navbar.css";

import { FaGlideG } from "react-icons/fa";

export const Nabvar = () => {
	return(
		<div className="container">
			<nav className="nav">
				<div className="nav__brand">
					<a className="nav__link" href="">
						<FaGlideG className="nav__link--icon"/>
						<span className="nav__link--text">Tienda Gómez</span>
					</a>
				</div>
				<ul className="nav__list">
					<li><a className="nav__link" href="">Ofertas</a></li>
					<li><a className="nav__link" href="">Productos</a></li>
					<li><a className="nav__link" href="">Carrito</a></li>
				</ul>
			</nav>
		</div>
	);
};

export default Nabvar;
