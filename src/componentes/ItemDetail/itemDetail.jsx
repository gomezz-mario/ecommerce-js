import React from "react";
import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { FiShoppingCart } from "react-icons/fi";
import {Link} from "react-router-dom";
import { VscChevronLeft, VscChevronRight} from "react-icons/vsc";
import "./itemDetail.css";

export const ItemDetail = ({data}) => {
	const [count, setCount] = useState(1);
	const [goToCart, setGoToCart] = useState(false);

	const onClickHandler = (e) => {
		setGoToCart(true);
	}

	return(
		<div className="item-details__wrapper">
			<div className="item-details__media">
				<div className="id__media-container id__media-container--vista">
					<img src={data.images[0]} alt={data.name} />
				</div>	
				<div className="id__media-container id__media-container--mini">
					<div className="media-mini__item">
						<img src={data.images[0]} alt={data.name} />
					</div>
					<div className="media-mini__item">
						<img src={data.images[0]} alt={data.name} />
					</div>
				</div>	
			</div>

			<div className="item-details__info">
				<div className="info__title">
					<h1>{data.name}</h1>
				</div>
				<div className="info__price-and-info">
					<span className="item-details__price">${data.price}</span>
				</div>
				{!goToCart
					? <div className="shipping__add-to-chart">
						<ItemCount count={count} onCount={setCount} minCount={1} maxCount={data.stock}/>	
						<button className="btn-add-to-chart" onClick={onClickHandler}><FiShoppingCart/><span> Comprar ahora</span></button>
					</div>
					: <div className="shipping__go-to-chart">
						<Link className="shipping__go-to-chart__link" to="/cart">Finalizar compra</Link>
					</div>
				}
				
			</div>
		</div>
	);
};
export default ItemDetail; 