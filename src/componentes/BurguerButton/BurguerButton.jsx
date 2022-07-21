import React from "react";
import styled from "styled-components";

//me falta un metodo que me haga un toggle con la clase showup en div:animate... agregar la prop..

const BurguerButton = () => {
	return(
		<BurguerContainer>
			<div className="burger" id="animate">
				<div className="topbread"></div>
				<div className="paty"></div>
				<div className="bottombread"></div>
  			</div>
		</BurguerContainer>   
	); 
};

const BurguerContainer = styled.div`
	.burger{
		width: 40px;
		cursor: pointer;
	}
	
	.topbread, .paty, .bottombread {
		width: 100%;
		background: white;
		height: 6px;  
		border-radius: 2px;
		transition: all 0.5s;
	}
	
	.paty{
		margin: 8px 0px;
	}
	
	.showup .topbread{
		transform: rotate(45deg) translate(10px, 10px);  
	}
	
	.showup .paty{
		opacity: 0;  
	}
	
	.showup .bottombread{
		transform: rotate(-45deg) translate(10px, -10px);  
	}
	
  	.showup {
		visibility: visible;
		opacity: 1;
  	}	
  
  	display: flex;
  	align-items: center;
  	justify-content: center;
  	padding: 1rem;
`;

export default BurguerButton;