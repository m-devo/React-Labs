import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useAppSelector } from '../../store/Hooks';

const Header = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0)

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        
        <Link to="/" className="text-2xl font-black text-blue-600 tracking-tighter">
          Ecommerce<span className="text-gray-900"> Store</span>
        </Link>

        <nav className=" md:flex items-center gap-8 font-bold text-gray-600">
          <Link to="/" className="hover:text-blue-600 transition">Home</Link>
          <Link to="/shop" className="hover:text-blue-600 transition">Shop</Link>
          <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
        </nav>

        <div className="flex items-center gap-6">
          <Link to="/cart" className="flex items-center gap-2 font-bold text-gray-700 hover:text-blue-600 transition">
             <div className="relative">
                <ShoppingCart size={22} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
             </div>
             <span>Cart</span>
          </Link>

          <div className="flex items-center gap-3">
             <Link to="/login" className="text-sm font-bold text-gray-600 hover:text-black">Login</Link>
             <Link to="/register" className="text-sm font-bold bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
               Register
             </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;