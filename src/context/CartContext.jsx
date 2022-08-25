import React, {useState, useContext} from "react";

const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext);  

export const CartProvider = ({children}) => {
	const [cart, setCart] = useState([]);
	const addToCart = (item, newQuantity) => {
		console.log(item);
		console.log("nuevo item.id: " + item.id);
		console.log("en el carrito items.id" + cart.map(prod => prod.id));
		let newCart = cart.filter(product => product.id !== item.id);
		newCart.push({...item, quantity: newQuantity});
		setCart(newCart);
		
	};
	const clearCart = () => setCart([]);
	const isInCart = (idProduct) => cart.find(product => product.id === idProduct) ? true: false;
	const removeFromCart = (idProduct) => setCart(cart.filter(product => product.id !== idProduct));

	const totalItems = () => cart.reduce((acum, item) => acum + item.quantity, 0);
	const totalPrice = () => cart.reduce((acum, item) => acum + item.quantity * item.price, 0)


	//console.log(cart);
	
	return(
		<CartContext.Provider value={{
			addToCart, 
			clearCart, 
			isInCart, 
			removeFromCart, 
			totalItems, 
			totalPrice,
			
			cart
			}}>
				
			{children}
		</CartContext.Provider>
	);
}

export default CartProvider;