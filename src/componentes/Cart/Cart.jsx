import React from "react";
import { useCartContext } from "../../context/CartContext";
import { CartItem } from "../CartItem/CartItem";
import { getFirestore, setDoc } from "firebase/firestore";
import "./cart.css";

export const Cart = () => {
	const {cart, totalPrice} = useCartContext();

	/*
	const order = {
		buyer: {
			name: "",
			phone: "",
			email: ""
		},
		items: cart,
		total: totalPrice
	};
*/
	if(cart.length === 0)
		return <><p>No hay productos en el carrito</p></>;

	return(
		<div className="cart-container">
			<div className="items-container">
				{cart.map(item => <CartItem key={item.id} item={item}/>)}
			</div>
			<div className="cart__total-price-container">
				<span>Total: ${totalPrice()}</span>
			</div>
			<div className="pagination-container">
				<button className="btn-pagination-cart">CONTINUAR COMPRANDO</button>
				<button className="btn-pagination-cart">PASAR POR CAJA</button>
			</div>
		</div>
		 
	);
};

export default Cart;