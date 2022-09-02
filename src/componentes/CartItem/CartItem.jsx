import React from "react";
import { BsTrash } from "react-icons/bs";
import { useCartContext } from "../../Context/CartContext";
import "./cart_item.css";

export const CartItem = ({item}) => {
	
	const {removeFromCart} = useCartContext();
	const onRemoveHandler = () => {
		removeFromCart(item.id);
	}


	return(
		<div className="container-fluid p-3 mb-3 d-flex justify-content-between item-cart-container rounded">
			<div className="d-flex">
				<div className="cart-item__image-container me-3">
					<img src={item.images[0]} alt="..." height={80} width={80}/>
				</div>
				<div className="d-flex flex-column justify-content-center pt-3">
					<span className="cart-item__title">{item.name}</span>
					<span>{item.marca}</span>
				</div>
			</div>
			<div className="d-flex align-items-center me-3">
				<span className="me-2 cart-item__detalle">{item.quantity} u.</span>
				<span className="me-2 cart-item__detalle fs-22">${item.price}</span>
			</div>
			<button className="item-cart__trash-btn" onClick={onRemoveHandler}><BsTrash/></button>
			
		</div>
	);
}


//Falta agregar el boton de eliminar...
