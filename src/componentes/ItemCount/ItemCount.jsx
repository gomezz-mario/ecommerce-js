import React from "react";

export const ItemCount = ({count, onCount}) => {
	return(
		<div>
			<button onClick={onCount(count-1)}>-</button>
			<span>{count}</span>
			<button onClick={onCount(count+1)}>+</button>
		</div>
	);
};

export default ItemCount;
