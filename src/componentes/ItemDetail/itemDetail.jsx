import React from "react";
import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";


import { FiShoppingCart } from "react-icons/fi";
import { VscChevronLeft, VscChevronRight} from "react-icons/vsc";

export const ItemDetail = ({data}) => {
	const [count, setCount] = useState(1);

	return(
		<div className="product">
			<div className="">
				<img src={data.images[0]} alt={data.name} />
			</div>
			<div className="">
				<div className="">
					<h1>{data.name}</h1>
				</div>
				<div className="price-and-info">
					<span>${data.price}</span>
				</div>
				<div className="box-to-cart">
					<ItemCount count={count} onCount={setCount} minCount={1} maxCount={data.stock}/>
					<button>
						<FiShoppingCart/>
						<span>Agregar al carrito</span>
					</button>
				</div>
			</div>
		</div>
	);
};
export default ItemDetail; 