import React from "react";
import {FaGlideG} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import CartButton from "../CartButton/CartButton";
import "./navbar.css";

export const Nabvar = () => {
	return(
		<div className="navbar-w">
			<h2 className="navbar__title"><FaGlideG/> My ecommers</h2>
			<ul className="nav__list">
				<li><NavLink className="nav__link" to='/'>Inicio</NavLink></li>
				<li><NavLink className="nav__link" to='/marca/Samsung'>Samsung</NavLink></li>
				<li><NavLink className="nav__link" to='/marca/Motorola'>Motorola</NavLink></li>
				<li><NavLink to='/cart'><CartButton/></NavLink></li>
			</ul>
		</div>
	);
};

export default Nabvar;
