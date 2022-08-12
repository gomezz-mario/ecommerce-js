import { getFirestore, addDoc, collection, Timestamp } from "firebase/firestore";
import { useState } from "react";
import { useCartContext } from "../../context/CartContext";

const OrderView = () => {
	const db = getFirestore();
	const ordersColection = collection(db, "orders");
	const {cart, totalPrice} = useCartContext();
	const [buyer, setBuyer] = useState({
		name: "",
		phone: "",
		email: ""
	});

	const changeHandler = (event) =>{
		const {name, value} = event.target;
		setBuyer({...buyer, [name]:value});
	}

	const sumbitHandler = (event) => {
		event.preventDefault();
		addDoc(ordersColection, {
			buyer: buyer,
			items: cart.map(item => {return({id:item.id, name: item.name, quantity: item.quantity, subtotal: item.price*item.quantity})}),
			date: Timestamp.now(),
			total: totalPrice()
		}).then(snapshot => console.log(snapshot));
	}

	return (
		<form onSubmit={sumbitHandler}>
			<div>
				<label htmlFor="name">Nombre</label>
				<input id="name" name="name" type="text" value={buyer.name} onChange={changeHandler}/>
			</div>
			<div>
				<label htmlFor="phone">Teléfono</label>
				<input id="phone" name="phone" value={buyer.phone} type="number"  onChange={changeHandler}/>
			</div>
			<div>
				<label htmlFor="email">email</label>
				<input id="email" name="email" value={buyer.email} type="email"  onChange={changeHandler}/>
			</div>
			<button type="submit">Enviar</button>
		</form>
	);
};
export default OrderView;