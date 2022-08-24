import React from "react";
import "./cart_button.css";
import {useCartContext} from "../../context/CartContext";
import {BsMinecartLoaded} from "react-icons/bs";
import { Link } from "react-router-dom";

const CartButton = ()=>{
	const {totalItems} = useCartContext();
	return(
		<Link to='/cart' className="link">
			<div className="d-flex flex-column me-3 align-items-center cart-btn-container">
				<BsMinecartLoaded className="icon"/>
				<span className="description">Carrito</span>
				<div className="cart-btn-count-container d-flex justify-content-center align-items-center">
					<span className="count">{totalItems()}</span>
				</div>
			</div>
		</Link>
	)
}

export default CartButton;