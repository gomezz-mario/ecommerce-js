import React from "react";
import { VscChromeClose } from "react-icons/vsc";
import { useCartContext } from "../../context/CartContext";
import "./cart_item.css";

export const CartItem = ({item}) => {
	const {removeFromCart} = useCartContext();
	return(
		<div className="item-cart-container">
			<div className="item-cart__image-container">
				<img src={item.images[0]} alt={item.name} />
			</div>
			<div>
				<p>{item.name}</p>
				<div className="item-cart__data-container">
					<p>Cantidad: {item.quantity}</p>
					<p>Precio unitario: ${item.price}</p>
					<p>Subtotal: ${item.price * item.quantity}</p>
				</div>
				<button className="btn-remove" onClick={()=> removeFromCart(item.id)}><VscChromeClose/></button>
			</div>
		</div>
	);
}