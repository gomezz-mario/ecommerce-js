import React from "react";
import {FaBolt} from "react-icons/fa";
import {FaHeart} from "react-icons/fa";
import "./item.css";

export const Item = ({info}) => {
	return(
		<div className="item__content">
			<a href="#" className="item__link">
				<div className="item__image-w">
					<img src={info.image} alt="" className="item__image" width={230} height={230} />
				</div>
			</a>
			<a href="#" className="item__link">
				<div className="item__data-w">
					<div className="item__group">
						<span className="item__group__element item__discount-price">{info.discountPrice}</span>
						<div className="item__group item__group--price-and-discount">
							<span className="item__group__element item__price">{info.price}</span>
							<span className="item__group__element item__discount-percent">{info.discountPercent}</span>
						</div>
						<span className="item__group__element item__installments">{info.installments}</span>
					</div>
					<div className="item__group item__group--shipping">
						<span className="item__group__element item__shipping">{info.shipping}</span>
						<span className="item__group__element item__shipping-type"><FaBolt/>FULL</span>
					</div>
					<div className="item__group">
						<span className="item__group__element item__name">{info.name}</span>
						<span className="item__group__element item__description">{info.description}</span>
					</div>				
				</div>
			</a>
			<button className="item__bookmark"><FaHeart/></button>
		</div>
	);
}

export default Item;