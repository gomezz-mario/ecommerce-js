import React from "react";
import {FaBolt} from "react-icons/fa";
import {FaHeart} from "react-icons/fa";
import "./item.css";

export const Item = ({info}) => {
	return(
		<div className="item__content">
			<div className="item__image-w">
				<a href="#" className="item__link">
					<img src={info.image} alt="" className="item__image" width={230} height={230} />
				</a>
			</div>
			<div className="item__data-w">
				<a href="#" className="item__link">
					<div className="item__price-w">
						<span className="item__discount-price">{info.discountPrice}</span>
						<div className="item__price-and-discount-w">
							<span className="item__price">{info.price}</span>
							<span className="item__discount-percent">{info.discount}</span>
						</div>
						<span className="item__installments">{info.installments}</span>
					</div>
					<div className="item__shipping-w">
						<span className="item__shipping">{info.shipping}</span>
						<span className="item__shipping-type"><FaBolt/>FULL</span>
					</div>
					<div className="item__title-w">
						<span className="item__name">{info.name}</span>
						<span className="item__description">{info.description}</span>
					</div>
				</a>
			</div>
			<button className="item__bookmark"><FaHeart/></button>
		</div>
	);
}

export default Item;