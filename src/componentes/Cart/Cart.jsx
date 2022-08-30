import React, {useState} from "react";
import { useCartContext } from "../../context/CartContext";
import { useLoginContext } from "../../context/LoginContext";
import { CartItem } from "../CartItem/CartItem";
import { getFirestore, addDoc, doc, collection, serverTimestamp } from "firebase/firestore";
import "./cart.css";
import { Link, Navigate } from "react-router-dom";

export const Cart = () => {
	const {cart, totalPrice, clearCart} = useCartContext();
	const {userLogin} = useLoginContext();

	const [finishShipping, setFinishShipping] = useState(false);

	if(!userLogin){
		return(
			<Navigate to="/acceso"/>
		);
	}

	if(finishShipping){
		return(
			<Navigate to="/"/>
		); 
	}

	const onFinishShipping = () => {
		const db = getFirestore();
		
		const order = {
			buyer: {
				buyerId: userLogin.id,
				nombre: userLogin.nombre,
				apellidos: userLogin.apellidos,
				direccion: userLogin.direccion,
				telefono: userLogin.telefono
			},
			items: cart,
			total: totalPrice()
		};

		addDoc(collection(db, "orders") ,{...order, fecha: serverTimestamp()}).then(() => {
			clearCart();
			setFinishShipping(true);
		});

	}

	if(cart.length === 0)
		return <><p>No hay productos en el carrito</p></>;

	return(
		<div className="container-fluid d-flex justify-content-center p-5">
			<div className="container-md">
				<h1 className="cartpage_title">Carrito</h1>
				<div className="container-fluid p-0">
					{cart.map(item => <CartItem key={item.id} item={item}/>)}
				</div>
				
			<div className="container-fluid d-flex justify-content-end p-0 mt-5 mb-5">
				<span className="cart__total-price">Total: ${totalPrice()}</span>
			</div>
			<div className="container-fluid p-0 d-flex justify-content-between pt-5 pb-5">
				<Link to="/" className="cancel-btn">CONTINUAR COMPRANDO</Link>
				<div className="confirm-btn" onClick={onFinishShipping}>FINALIZAR COMPRA</div>
			</div>
			</div>
		</div>
		 
	);
};

export default Cart;