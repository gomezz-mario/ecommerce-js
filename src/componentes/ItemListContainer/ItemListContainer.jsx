import React, {useState, useEffect} from "react";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";


const products = [{id: 1, image: "https://picsum.photos/id/237/300/300", name: "Lentes de sol - VULK", description: "", precio: "$8.000", discountPercent: "20% OFF", discountPrice: "$10.000", installments: "6x cuotas sin interés", shipping: "Llega gratis mañana"}];

export const ItemListContainer = () => {
	
	const [data, setData] = useState([]);
	
	useEffect(() => {
		const getData = new Promise(
			resolve => {
				setTimeout(
					resolve(products),
					3000
				);
			}
		,[]);

		getData.then(res => {
			console.log(res);
			setData(res);
		})
	});
	

	return (
		<>
			<ItemList data={data}/>
		</>
	);
};

export default ItemListContainer;