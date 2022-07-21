import React from "react";
import styled from "styled-components";
import {FaCartArrowDown} from "react-icons/fa";

const CartButton = () => {
	return(
		<CartButtonContainer>
			<div id="cart-button">
				<FaCartArrowDown className="cart__icon"/>
				<div className="cart__products">
					<span>10</span>
				</div>
			</div>
		</CartButtonContainer>
	);
};

const CartButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	
	width: 60px;
	heigth: 60px;
	position: relative;

	.cart__icon{
		display: block;
		width: 100%;
		height: 100%;
		font-size: 24px;
		color: #FFF;
	}
	.cart__products{
		display: flex;
		align-items: center;
		justify-content: center;

		position: absolute;
		top: -20px;
		rigth: 10px;
		
		font-size: 10px;
		width: 15px;
		heigth: 15px;
		padding: 3px;

		border-radius: 50%;
		background-color: #FF0000;
		color: #FFF;
	}
`;

export default CartButton;