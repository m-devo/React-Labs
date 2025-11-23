import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react'; 
import type { Product, ProductResponse } from '../../models/ProductModel';
import Swal from 'sweetalert2'; 

import { useAppDispatch, useAppSelector } from '../../store/Hooks';
import { addToCart } from '../../store/CartSlice';

const apiURL = import.meta.env.VITE_API_BASE_URL;

const ProductsList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const itemsPerPage = 12; 

  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product)); 
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });
    
    Toast.fire({
      icon: "success",
      title: "Added to cart",
      text: `${product.title} has been added`
    });
  };

  useEffect(() => {    
    const fetchProducts = async () => {
      setLoading(true); 
      try {
        const skip = (currentPage - 1) * itemsPerPage;
        const res = await fetch(`${apiURL}/products?limit=${itemsPerPage}&skip=${skip}`);
        const data: ProductResponse = await res.json();
        
        setProducts(data.products);
        setTotalProducts(data.total); 
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [currentPage]); 

  const totalPages = Math.ceil(totalProducts / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const getStockStatus = (stock: number) => {
    if (stock === 0) return { label: 'Out of Stock', color: 'text-red-600 bg-red-50' };
    if (stock < 5) return { label: `Low Stock (${stock})`, color: 'text-orange-600 bg-orange-50' };
    return { label: 'In Stock', color: 'text-green-600 bg-green-50' };
  };

  if (loading) return <div className="text-center py-20 text-xl">Loading...</div>;

  return (
    <>
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 "/>
        <div className="container mx-auto px-6 py-24 md:py-32 relative z-10 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            <span className="text-red-500">Welcome to our Shop</span>
          </h1>
        </div>
      </section>

    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => {
          const stockStatus = getStockStatus(product.stock);
          const isOutOfStock = product.stock === 0;

          const cartItem = cartItems.find((item) => item.id === product.id);
          const currentQty = cartItem ? cartItem.quantity : 0;
          const isMaxReached = currentQty >= product.stock;

          return (
            <div key={product.id} className="bg-white border border-gray-200 
            rounded-xl p-4 flex flex-col hover:shadow-lg transition relative group">
              
              <div className="absolute top-4 left-4 z-20">
                <span className={`text-xs font-bold px-2 py-1 rounded-full ${stockStatus.color}`}>
                  {stockStatus.label}
                </span>
              </div>

              <div className="h-48 flex justify-center items-center mb-4 bg-gray-50 rounded-lg overflow-hidden">
                <img src={product.thumbnail} alt={product.title} 
                className={`h-full object-contain transition ${isOutOfStock ? 'grayscale opacity-60' : ''}`} />
              </div>

              <div className="flex-grow">
                <h3 className="font-bold text-gray-800 truncate">{product.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-lg font-black text-blue-600">${product.price}</span>
                </div>
              </div>

              <button 
                disabled={isOutOfStock || isMaxReached} 
                onClick={(e) => {
                  e.preventDefault();
                  if (!isOutOfStock && !isMaxReached) handleAddToCart(product);
                }}
                className={`mt-3 w-full py-2 rounded-lg font-bold transition flex 
                  justify-center items-center gap-2 relative z-20
                ${(isOutOfStock || isMaxReached)
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  : 'bg-gray-900 text-white hover:bg-blue-600' 
                }`}
              >
                {isOutOfStock 
                  ? 'Out of Stock' 
                  : isMaxReached 
                    ? 'Max Reached' 
                    : <><ShoppingCart size={16} /> Add to Cart</>
                }
              </button>

              <Link to={`/product/${product.id}`} className="absolute inset-0 z-10" />
            </div>
          );
        })}
      </div>
      <div className="flex justify-center items-center mt-10 gap-4">
         <button onClick={() => handlePageChange(currentPage - 1)} 
         disabled={currentPage === 1} className="flex items-center px-4 py-2
          bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50 
          disabled:cursor-not-allowed transition"><ChevronLeft size={20} /> Previous</button>
         <span className="text-gray-600 font-medium">Page {currentPage} of {totalPages}</span>
         <button onClick={() => handlePageChange(currentPage + 1)} 
         disabled={currentPage === totalPages} className="flex items-center px-4 py-2 
         bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50 
         disabled:cursor-not-allowed transition">Next <ChevronRight size={20} /></button>
      </div>
    </div>
    </>
  );
};

export default ProductsList;