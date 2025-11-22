import { Link } from 'react-router-dom';
import { useCart } from '../Context/CartContext';
import { Trash2, Minus, Plus } from 'lucide-react'; 

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold mb-4">Your Cart is Empty</h2>
        <Link to="/" className="bg-blue-600 text-white px-6 py-2 rounded-lg">Go Shop</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <div className="lg:col-span-2 flex flex-col gap-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row items-center gap-4 bg-white p-4 
            rounded-xl border border-gray-100 shadow-sm">
              
              <img src={item.thumbnail} className="w-20 h-20 object-contain bg-gray-50 rounded-md" alt={item.title} />
              
              <div className="flex-grow text-center sm:text-left">
                <h3 className="font-bold text-gray-800">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.category}</p>
              </div>

              <div className="flex items-center border border-gray-300 rounded-lg">
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1} 
                  className="p-2 hover:bg-gray-100 text-gray-600 disabled:opacity-50"
                >
                  <Minus size={16} />
                </button>
                
                <span className="px-4 font-medium w-12 text-center">{item.quantity}</span>
                
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="p-2 hover:bg-gray-100 text-gray-600"
                >
                  <Plus size={16} />
                </button>
              </div>

              <div className="text-right min-w-[80px]">
                <p className="font-bold text-lg text-blue-600">${(item.price * item.quantity).toFixed(2)}</p>
                <button 
                  onClick={() => removeFromCart(item.id)} 
                  className="text-red-500 text-sm flex items-center justify-end gap-1 mt-2 hover:underline w-full"
                >
                  <Trash2 size={14}/> Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm h-fit">
          <h3 className="font-bold text-xl mb-4">Order Summary</h3>
          <div className="flex justify-between mb-2 text-gray-600">
            <span>Subtotal</span>
            <span>${total.toFixed(2)}</span>
          </div>
           <div className="flex justify-between mb-4 text-gray-600">
            <span>Tax (0%)</span>
            <span>$0.00</span>
          </div>
          <hr className="my-4 border-gray-200" />
          <div className="flex justify-between mb-6 text-xl font-bold text-gray-900">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button className="w-full bg-blue-600 text-white py-3 rounded-xl 
          font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-600/20">
            Checkout
          </button>
        </div>

      </div>
    </div>
  );
};

export default Cart;