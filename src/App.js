import Navbar from './componentes/Navbar/Navbar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import Cart from './componentes/Cart/Cart';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CartProvider from './context/CartContext';



function App() {
  return (
    
    <>
      <BrowserRouter>
        <CartProvider>
        <Navbar/>
          <Routes>
            <Route path='/' element={<ItemListContainer />}/>
            <Route path='/marca/:marcaId' element={<ItemListContainer />}/>
            <Route path='/detalle/:itemId' element={<ItemDetailContainer />}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
        </CartProvider>
        </BrowserRouter>


        

    </>
  );
}

export default App;
