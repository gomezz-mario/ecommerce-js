import React, {useState} from "react";
import ItemCount from "../ItemCount/ItemCount";
import {Link} from "react-router-dom";
import {useCartContext} from "../../Context/CartContext";
import "./item-detail.css";



const ItemDetail = ({data}) => {
	
	const [count, setCount] = useState(1);
	const [goToCart, setGoToCart] = useState(false);
	const {addToCart} = useCartContext();
	
	const onCount = (newQuantity) => {setCount(newQuantity)};

	const onCart = (e) => {
		setGoToCart(true);
		addToCart(data, count);
		console.log("se agregaron items al carrito!!");
	}

	return(
		<div className="container-fluid d-flex justify-content-center mt-5 mb-5">
			<div className="container-md d-flex flex-column">
				<div className="d-flex">
					<div className="me-3">
						<div className="item__image-container">
							<img src={data.images[0]} alt="..." width={300} height={300}/>
						</div>
						<div className="d-flex">
						{
							data.images.map(image => {
								return(
									<div className="item__image-container" key={image}>
										<img src={image} alt="..." width={100} height={100}/>
									</div>
								);
							})
						}
						</div>
					</div>
					<div className="me-3 p-4">
						<h1 className="item-detail__title">{data.name}</h1>
						<span className="item-detail__price">${data.price}</span>
						{	
							!goToCart ? 
							<>
								<div className="mt-3">
									<span className="quantity-label">CANTIDAD:</span>		
									<ItemCount count={count} onCount={onCount}/>
								</div>
								<button onClick={()=> onCart()} className="btn-comprar">Agregar al carrito</button>
							</>
							: 
							<>
								<Link to="/cart" className="btn btn-fin-compra">Finalizar compra</Link>
							</>
							
							
						}
						
					</div>
				</div>

				
			</div>
		</div>
	);
}

export default ItemDetail; 