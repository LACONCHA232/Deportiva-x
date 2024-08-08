import './App.css';
import Login from './Screens/Login/Login';
import SignUp from './Screens/SignUp/SignUp';
import ForgotPass from './Screens/ForgotPassword/ForgotPass';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './Screens/MainPage/MainPage';
import Orders from './Screens/Orders/Orders';
import Products from './Screens/Products/Products';
import ProtectedRoute from './ProtectedRoute.jsx';
import ShoppingCart from './Screens/ShoppingCart/ShoppingCart.jsx';
import DetailsOrder from './Screens/DetailsOrders/DetailsOrder.jsx';
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    // Limpiar el localStorage al montar la aplicación si no hay token
    const token = localStorage.getItem('token');
    if (!token) {
      localStorage.clear(); // Limpia todo el localStorage si no hay token
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/forgotpass' element={<ForgotPass />} />
        <Route path='/' element={<MainPage />} />
        <Route path='/orders' element={<ProtectedRoute><Orders /></ProtectedRoute>} />
        <Route path='/product/:idProductos' element={<Products />} /> {/* Asegúrate de que esta ruta coincide */}
        <Route path='/ShoppingCart' element={<ShoppingCart/>} />
        <Route path='/detailsOrder' element={<DetailsOrder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
