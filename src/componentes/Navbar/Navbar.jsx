import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = ()=> {
	return(
		<div className="container-fluid navbar-container p-0">
			<nav className="container-md p-1">
				<NavLink className="navlink" to="/category/Celulares"><span className="categoria me-5 ms-3">CELULARES</span></NavLink>
				<NavLink className="navlink" to="/category/notebooks"><span className="categoria me-5 ms-3">NOTEBOOKS</span></NavLink>
				<NavLink className="navlink" to="/category/tvaudio"><span className="categoria me-5 ms-3">TV Y AUDIO</span></NavLink>
				<NavLink className="navlink" to="/category/accesorios"><span className="categoria me-5 ms-3">ACCESORIOS</span></NavLink>
			</nav>
		</div>
	)
}

export default Navbar;







