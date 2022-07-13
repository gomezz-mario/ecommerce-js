import React from "react";
import styled from 'styled-components';
import { FaGlideG } from "react-icons/fa";
import CartButton from "./CartButton";

export const Nabvar = () => {
	return(
		<NavbarContainer>
			<h2><FaGlideG/> My ecommers</h2>
			<ul className="nav__list">
				<li><a className="nav__link" href="">Inicio</a></li>
				<li><a className="nav__link" href="">Productos</a></li>
				<li><CartButton/></li>
			</ul>
		</NavbarContainer>
	);
};

export default Nabvar;

const NavbarContainer = styled.nav`
	h2{
		margin-left: .4rem;
		color: #FFF;
	}

	.nav__list {
		display: flex;
		justify-content: start;
		align-items: center;
		list-style: none;
	}
	.nav__link{
		display: flex;
		align-items: center;
		margin: 1rem;
		text-decoration: none;
		color: #FFF;
	}

	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: .4rem;
	background-color: #333;
`;