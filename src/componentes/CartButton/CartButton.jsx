import React from "react";
import {FaCartArrowDown} from "react-icons/fa";
import "./cart_button.css";

const CartButton = () => {
	return(
		<div className="cart-button-w">
			<div id="cart-button">
				<FaCartArrowDown className="cart__icon"/>
				<div className="cart__products">
					<span>10</span>
				</div>
			</div>
		</div>
	);
};

export default CartButton;