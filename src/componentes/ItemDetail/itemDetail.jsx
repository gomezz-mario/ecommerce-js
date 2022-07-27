import React from "react";

export const ItemDetail = ({data}) => {
	console.log(data);
	return(
		<div className="item-detail-wrapper">
			<div className="item-detal__image-w">
				<img src={data.images[0]} alt="imagen de producto" />
			</div>
			<div className="item-detail__data-content">
				<h1>{data.name}</h1>
				<p>${data.price}</p>
			</div>
		</div>
	);
};
export default ItemDetail; 