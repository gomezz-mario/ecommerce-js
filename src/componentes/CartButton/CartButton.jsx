import React from "react";
import {FaCartArrowDown} from "react-icons/fa";
import "./cart_button.css";
import {useCartContext} from "../../context/CartContext";

const CartButton = () => {

	const {totalItems} = useCartContext();

	return(
		<div className="cart-button-w">
			<div id="cart-button">
				<FaCartArrowDown className="cart__icon"/>
				<div className="cart__products">
					<span>{totalItems()}</span>
				</div>
			</div>
		</div>
	);
};

export default CartButton;