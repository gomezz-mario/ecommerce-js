import React from "react";

export const ItemDetail = ({data}) => {
	return(
		<div className="item-detail-wrapper">
			<div className="item-detal__image-w">
				<img src={data.image} alt="imagen de producto" />
			</div>
			<div className="item-detail__data-content">
				<h1>{data.name}</h1>
				<p>{data.description}</p>
			</div>
		</div>
	);
};
export default ItemDetail; 