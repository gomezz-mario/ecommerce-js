import React from "react";
import ItemDetail from "../ItemDetail/itemDetail";
import { useEffect } from "react";
import { useState } from "react";
import "./itemDetailContainer.css";

const bd = {id: 1, image: "https://picsum.photos/id/237/300/300", name: "Lentes de sol - VULK", description: "Marco metálico resistente y flexible", price: "$8.000", discountPercent: "20% OFF", discountPrice: "$10.000", installments: "6x $1.500 sin interés", shipping: "Envío gratis"};

export const ItemDetailContainer = () => {
	const [data,setData] = useState({});

	useEffect(()=>{
		const getData = new Promise(resolve => {
			setTimeout(resolve(bd), 3000);
		});
		getData.then(res => setData(res));
	},[]);

	return(
		<ItemDetail data={data}/>
	);
};

export default ItemDetailContainer;