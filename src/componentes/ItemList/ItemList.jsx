import React from "react";
import Item from "../Item/Item";

export const ItemList = ({data = []}) => {
	return(
		data.map((prod) => <Item key={prod.id} data={prod}/>)
	);
};

export default ItemList;