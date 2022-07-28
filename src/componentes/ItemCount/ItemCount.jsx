import React from "react";
import "./item_count.css";
import { FaMinus, FaPlus } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { useState } from "react";

export const ItemCount = ({count, onCount, minCount, maxCount}) => {

	


	return(
		<div className="item-count-w">
					
			<div className="item-count">
				<button disabled={(count == minCount)} onClick={()=> onCount(count-1)}><FaMinus/></button>
				<span className="item-count__count">{count}</span>
				<button  disabled={(count == maxCount)} onClick={()=> onCount(count+1)}><FaPlus/></button>
				
			</div>

			

		</div>

		
	);
};

export default ItemCount;
