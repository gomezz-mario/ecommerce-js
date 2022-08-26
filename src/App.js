import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer';
import Cart from './Componentes/Cart/Cart';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CartProvider from './context/CartContext';
import LoginProvider from './context/LoginContext';
import OrderView from './Componentes/OrderView/OrderView';
import Header from './Componentes/Header/Header';
import Footer from './Componentes/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';



function App() {
  return (
    
    <>
      <BrowserRouter>
      <LoginProvider>
        <CartProvider>
          <Header/>
            <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/acceso' element={<LoginPage/>}/>
              <Route path='/registration' element={<RegistrationPage/>}/>
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
