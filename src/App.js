import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import Cart from './componentes/Cart/Cart';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CartProvider from './context/CartContext';
import LoginProvider from './context/LoginContext';
import OrderView from './componentes/OrderView/OrderView';
import Header from './componentes/Header/Header';
import Footer from './componentes/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';



function App() {
  return (
    
    <>
      <BrowserRouter>
      <LoginProvider>
        <CartProvider>
          <Header/>
            <Routes>
              <Route path='/' element={<HomePage />}/>
              <Route path='/acceso' element={<LoginPage/>}/>
              <Route path='/category/:category' element={<ItemListContainer />}/>
              <Route path='/detalle/:itemId' element={<ItemDetailContainer />}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/order' element={<OrderView/>}/>
            </Routes>
          </CartProvider>
        </LoginProvider>
        <Footer/>
        </BrowserRouter>


        
    </>
  );
}

export default App;
