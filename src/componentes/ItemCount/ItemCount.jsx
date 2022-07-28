import React from "react";
import "./item_count.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export const ItemCount = ({count, onCount, minCount, maxCount}) => {

	
	return(
		<div className="item-count-w">
			<div className="item-count__container">
				<button disabled={(count == minCount)} onClick={()=> onCount(count-1)}><FaAngleLeft/></button>
			</div>
			
			<div className="item-count__container item-count__container--count">
				<span className="item-count__count">{count}</span>
			</div>
			<div className="item-count__container">
				<button  disabled={(count == maxCount)} onClick={()=> onCount(count+1)}><FaAngleRight/></button>
			</div>
		</div>
	);
};

export default ItemCount;
