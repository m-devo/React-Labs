import { Link } from 'react-router-dom';
import { ShoppingBag, Truck, ShieldCheck, Headset, ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-white">
      
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-cover bg-center" />
        
        <div className="container mx-auto px-6 py-24 md:py-32 relative z-10 flex flex-col items-center text-center">
          <span className="bg-blue-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">
            New Collection 2025
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Discover the Future <br /> of <span className="text-red-500">Shopping</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl">
            Explore our latest arrivals in technology, fashion, and accessories. 
            Get the best deals with premium quality products.
          </p>
          <div className="flex gap-4">
            <Link to="/shop" className="bg-white text-gray-900 px-8 py-3 rounded-full 
            font-bold hover:bg-gray-100 transition flex items-center gap-2">
              <ShoppingBag size={20} /> Shop Now
            </Link>
            <Link to="/contact" className="border border-white 
            text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-gray-900 transition">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border 
            border-gray-100 hover:shadow-md transition text-center group">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 
              rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                <Truck size={32} />
              </div>
              <h3 className="font-bold text-xl mb-2">Free Shipping</h3>
              <p className="text-gray-500 text-sm">On all orders over $100. 
                Fast and reliable delivery to your doorstep.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border 
            border-gray-100 hover:shadow-md transition text-center group">
              <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full 
              flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                <ShieldCheck size={32} />
              </div>
              <h3 className="font-bold text-xl mb-2">Secure Payment</h3>
              <p className="text-gray-500 text-sm">100% secure payment with 256-bit SSL encryption trusted by millions.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl 
            shadow-sm border border-gray-100 hover:shadow-md transition text-center group">
              <div className="w-16 h-16 bg-purple-50 text-purple-600 
              rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                <Headset size={32} />
              </div>
              <h3 className="font-bold text-xl mb-2">24/7 Support</h3>
              <p className="text-gray-500 text-sm">Dedicated support team ready to help you via email or chat.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Shop by Category</h2>
              <p className="text-gray-500">Find exactly what you are looking for</p>
            </div>
            <Link to="/shop" className="text-blue-600 font-bold hover:underline flex items-center gap-1">
              View All <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/shop" className="relative h-64 rounded-2xl overflow-hidden group cursor-pointer">
              <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80"
               alt="Electronics" className="w-full h-full object-cover transition duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition">
                <h3 className="text-white text-2xl font-bold tracking-wider border-b-2 border-white pb-1">ELECTRONICS</h3>
              </div>
            </Link>

            <Link to="/shop" className="relative h-64 rounded-2xl overflow-hidden group cursor-pointer">
              <img src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=800&q=80" 
              alt="Fashion" className="w-full h-full object-cover transition duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition">
                <h3 className="text-white text-2xl font-bold tracking-wider border-b-2 border-white pb-1">FASHION</h3>
              </div>
            </Link>

            <Link to="/shop" className="relative h-64 rounded-2xl overflow-hidden group cursor-pointer">
              <img src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80"
               alt="Accessories" className="w-full h-full object-cover transition duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition">
                <h3 className="text-white text-2xl font-bold tracking-wider border-b-2 border-white pb-1">ACCESSORIES</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 py-16 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Subscribe to our Newsletter</h2>
          <p className="text-blue-100 mb-8 max-w-lg mx-auto">Get the latest updates on new products and upcoming sales.</p>
          <div className="flex justify-center max-w-md mx-auto gap-2">
            <input type="email" placeholder="Your email address" className="w-full px-4 py-3 rounded-lg 
            text-gray-900 focus:outline-none" />
            <button className="bg-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-gray-800 transition">Subscribe</button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;