import React from "react";
import { useCartContext } from "../../context/CartContext";
import { CartItem } from "../CartItem/CartItem";

export const Cart = () => {
	const {cart, totalPrice} = useCartContext();
	if(cart.length === 0)
		return <><p>No hay productos en el carrito</p></>;
	
	return( 
		<>
			<div className="items-container">
			{cart.map(item => <CartItem key={item.id} item={item}/>)}
			</div>
			<span>Total: ${totalPrice()}</span>
		</>
		 
	);
};

export default Cart;