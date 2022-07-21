import React from "react";
import {FaGlideG} from "react-icons/fa";
import CartButton from "../CartButton/CartButton";
import "./navbar.css";

export const Nabvar = () => {
	return(
		<div className="navbar-w">
			<h2 className="navbar__title"><FaGlideG/> My ecommers</h2>
			<ul className="nav__list">
				<li><a className="nav__link" href="">Inicio</a></li>
				<li><a className="nav__link" href="">Productos</a></li>
				<li><CartButton/></li>
			</ul>
		</div>
	);
};

export default Nabvar;
