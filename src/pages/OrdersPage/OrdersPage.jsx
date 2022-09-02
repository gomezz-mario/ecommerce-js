import { useState, useEffect } from "react"
import { useLoginContext } from "../../Context/LoginContext"
import { Navigate } from "react-router-dom";
import OrderItem from "../../Componentes/OrderItem/OrderItem";

import { getFirestore, query, collection, where, getDocs } from "firebase/firestore";
import "./order-page.css";

//, where("buyerId", "==", userLogin.id)
const OrdersPage = () => {
	
	const [orders, setOrders] = useState([]);
	const {userLogin} = useLoginContext();
	
	useEffect(()=>{
		if(userLogin){
			const db = getFirestore();
			const qry = query(collection(db, "orders"), where("buyer.buyerId", "==", userLogin.id));
			getDocs(qry).then(querySnapshot => {
				const data = querySnapshot.docs.map(doc => {return {...doc.data(), id: doc.id}});
				setOrders(data);
			});
		}
	},[userLogin]);

	if(!userLogin){
		return(
			<Navigate to="/"/>
		);
	}

	if(orders.length === 0){
		return(
			<main className="container-fluid d-flex justify-content-center orderspage-main p-5">
				<span>No hay compras</span>
			</main>
		);
	} else{
		return(
			<main className="container-fluid d-flex justify-content-center orderspage-main mt-5 mb-5">
				<div className="container-md">
					<h1 className="orderpage__title">Mis compras</h1>
					<div className="container-fluid p-0">
						{
							orders.map(order => <OrderItem key={order.id} order={order} />)
						}
					</div>
				</div>
			</main>
		);
	}
}


export default OrdersPage;