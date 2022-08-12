import React from "react";
import {Link} from "react-router-dom";
import {FaCartArrowDown} from "react-icons/fa";
import "./item.css";

export const Item = ({data}) => {
	//console.log(data);
	return(
		<div className="item__container item__wrapper">
			<Link to={`/detalle/${data.id}`}>
				<div className="item__container item__container--image">
					<img src={data.images[0]} alt={data.name} />
				</div>
			</Link>
			<div className="item__container item__container--details">
				<div className="item__name">
					<strong>{data.name}</strong>
				</div>
				<div className="item__price">
					<span>${parseFloat(data.price).toFixed(2)}</span>
				</div>
			</div>
			<div className="item__container item__container--chart">
				<FaCartArrowDown className="item__chart-icon"/>
				<span className="item__chart-text">Agregar al carrito</span>
			</div>
			
		</div>
	);
}

export default Item;