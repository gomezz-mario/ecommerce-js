import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginProvider from "./context/LoginContext";
import CartProvider from "./context/CartContext";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./FormsPages/LoginPage";
import RegistrationPage from "./FormsPages/RegistrationPage";
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import OrdersPage from "./pages/OrdersPage/OrdersPage";
import Header from "./componentes/Header/Header";
import Footer from "./componentes/Footer/Footer";
import CartPage from "./pages/CartPage/CartPage";


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
