import React, {useState, useContext} from "react";

const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext);  

export const CartProvider = ({children}) => {
	const [cart, setCart] = useState([]);
	const addToCart = (item, newQuantity) => {
		let newCart = cart.filter(product => product.id !== item.id);
		newCart.push({...item, quantity: newQuantity});
		setCart(newCart);
	};
	const clearCart = () => setCart([]);
	const isInCart = (idProduct) => cart.find(product => product.id === idProduct) ? true: false;
	const removeFromCart = (idProduct) => setCart(cart.filter(product => product.id !== idProduct));

	console.log(cart);
	
	return(
		<CartContext.Provider value={{addToCart, clearCart, isInCart, removeFromCart}}>
			{children}
		</CartContext.Provider>
	);
}

export default CartProvider;