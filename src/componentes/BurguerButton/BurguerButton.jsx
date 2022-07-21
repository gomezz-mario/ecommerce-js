import React from "react";
import "./burguer_button.css";

const BurguerButton = () => {
	return(
		<div className="burguer-w">
			<div className="burguer" id="animate">
				<div className="topbread"></div>
				<div className="paty"></div>
				<div className="bottombread"></div>
  			</div>
		</div>   
	); 
};

export default BurguerButton;