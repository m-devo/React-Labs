import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Layout from './components/Layout/Layout';
import ProductDetails from './components/Products-Details/Products-Details';
import ProductsList from './components/Products-List/Product-List';
import Cart from './components/Cart/Cart';
import NotFound from './components/Not-Found/Not-Found';
import { CartProvider } from './components/Context/CartContext'; 

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ProductsList />} />
            <Route path="product/:id" element={<ProductDetails />} />
            <Route path="cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;