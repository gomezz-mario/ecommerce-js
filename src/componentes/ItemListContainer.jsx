import React from "react";
import ItemCount from "./ItemCount";

export const ItemListContainer = () => {
	
	function onAdd(quantity){
		console.log("Compraste "+quantity+ " unidades!");
	}
	
	return (
		<>
			<ItemCount initial={1} stock={5} onAdd={onAdd}/>
		</>
	);
};

export default ItemListContainer;