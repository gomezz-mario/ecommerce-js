import React from "react";
import "./cart_button.css";
import {useCartContext} from "../../context/CartContext";
import {BsCart2} from "react-icons/bs";

import { Link } from "react-router-dom";

const CartButton = ()=>{
	const {totalItems} = useCartContext();
	return(
		<Link to='/cart' className="link">
			<div className="d-flex justify-content-center align-items-center p-2 cart-btn-container">
				<BsCart2 className="icon"/>
				<div className="cart-btn-count-container d-flex justify-content-center align-items-center">
					<span className="count">{totalItems()}</span>
				</div>
			</div>
		</Link>
	)
}

export default CartButton;