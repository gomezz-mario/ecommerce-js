import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginProvider from "./Context/LoginContext";
import CartProvider from "./Context/CartContext";
import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./FormsPages/LoginPage";
import RegistrationPage from "./FormsPages/RegistrationPage";
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from "./Componentes/ItemDetailContainer/ItemDetailContainer";
import OrdersPage from "./Pages/OrdersPage/OrdersPage";
import Header from "./Componentes/Header/Header";
import Footer from "./Componentes/Footer/Footer";
import CartPage from "./Pages/CartPage/CartPage";


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
              <Route path='/cart' element={<CartPage/>}/>
              <Route path='/orders' element={<OrdersPage/>}/>
            </Routes>
          </CartProvider>
        </LoginProvider>
        <Footer/>
        </BrowserRouter>


        
    </>
  );
}

export default App;
