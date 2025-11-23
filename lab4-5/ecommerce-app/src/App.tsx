import { Suspense, lazy } from 'react'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Layout from './components/Layout/Layout';

import { Provider } from 'react-redux';
import { store } from './store/Store'; 

const Home = lazy(() => import('./components/Home/Home')); 
const ProductsList = lazy(() => import('./components/Products-List/Product-List'));
const ProductDetails = lazy(() => import('./components/Products-Details/Products-Details'));
const Cart = lazy(() => import('./components/Cart/Cart'));
const NotFound = lazy(() => import('./components/Not-Found/Not-Found'));
const Register = lazy(() => import('./components/Register/Register')); 
const Contact = lazy(() => import('./components/Contact/Contact'));   
const Login = lazy(() => import('./components/Login/Login'));        

const Loading = () => (
  <div className="h-screen flex justify-center items-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-blue-600"></div>
  </div>
);

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="shop" element={<ProductsList />} />
              <Route path="product/:id" element={<ProductDetails />} />
              <Route path="cart" element={<Cart />} />
              <Route path="contact" element={<Contact />} />
              <Route path="register" element={<Register />} />
              <Route path="login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
}

export default App;