import React,{useState} from "react";
import styled from "styled-components";

export const ItemCount = ({initial, stock, onAdd}) => {
	
	const[count, setCount] = useState(initial);
	
	function increase(){	
		setCount(count+1);
	}
	function decrease(){
		setCount(count-1);
	}

	return(
		<ItemCountContainer>
			<div className="item-count-w">
				<button className="btn-unit" disabled={count<=1} onClick={decrease}>-</button>
				<span className="item-count">{count}</span>
				<button className="btn-unit" disabled={count>stock} onClick={increase}>+</button>
			</div>
			<button className="btn-add-to-chart" disabled={count<=0} onClick={()=> onAdd(count)}>Agregar al carrito</button>
		</ItemCountContainer>
		
	);
};

export default ItemCount;

const ItemCountContainer = styled.div`
	.item-count-w{
		display: flex;
		flex-direction: row nowrap;
		align-items: center;
		justify-content: center;
		width: 120px;
		height: 40px;
		border-radius: 5px;
		background-color: rgba(200,250,200,1);

		.item-count{
			display: flex;
			justify-content: center;
			width: 100%;
		}
		.btn-unit{
			font-size: 16px;
			width: 20px;
			height: 100%;
			background: none;
			border: none;
		}
	}
`;