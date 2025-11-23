import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom'; 
import { ArrowLeft, ShoppingCart } from 'lucide-react';
import type { Product } from '../../models/ProductModel';
import Swal from 'sweetalert2';

import { useAppDispatch, useAppSelector } from '../../store/Hooks';
import { addToCart } from '../../store/CartSlice';

const apiURL = import.meta.env.VITE_API_BASE_URL;

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>(''); 
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  
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
    fetch(`${apiURL}/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setSelectedImage(data.thumbnail); 
        setLoading(false);
      })
      .catch((err) => {
         console.error(err);
         setLoading(false);
      });
  }, [id]);

  const cartItem = product ? cartItems.find(item => item.id === product.id) : null;
  const currentQuantityInCart = cartItem ? cartItem.quantity : 0;

  const isMaxStockReached = product ? currentQuantityInCart >= product.stock : false;
  const isOutOfStock = product ? product.stock === 0 : true;

  if (loading) return <div className="h-screen flex justify-center items-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-blue-600 border-t-transparent"></div></div>;
  if (!product) return <div className="text-center py-20 text-xl font-bold text-gray-500">Product not found</div>;

  return (
    <div className="container mx-auto px-4 py-8">

      <nav className="flex text-sm text-gray-500 mb-8 bg-gray-100 w-fit px-4 py-2 rounded-lg">
        <Link to="/" className="hover:text-blue-600 font-medium">Home</Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="capitalize text-gray-800 font-medium">{product.category}</span>
        <span className="mx-2 text-gray-400">/</span>
        <span className="truncate max-w-[150px] text-gray-400">{product.title}</span>
      </nav>

      <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-600 
      hover:text-blue-600 mb-6 transition font-bold group">
        <div className="bg-white p-2 rounded-full shadow-sm 
        group-hover:shadow-md border border-gray-100 transition"><ArrowLeft size={18} /></div> Back to Shop
      </button>
      
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          
          <div className="lg:col-span-7 bg-white p-8 lg:p-12 flex flex-col items-center justify-center
           border-b lg:border-b-0 lg:border-r border-gray-100 relative">
             <div className="relative z-10 w-full flex justify-center mb-8 h-[450px]">
                <img src={selectedImage} alt={product.title} className="h-full object-contain drop-shadow-2xl
                 transition-opacity duration-300" />
             </div>
             <div className="relative z-10 flex gap-4 mt-4 overflow-x-auto w-full justify-center px-4 pb-2">
               {product.images?.slice(0,4).map((img, idx) => {
                 const isSelected = img === selectedImage;
                 return (
                 <button 
                    key={idx} 
                    onClick={() => setSelectedImage(img)}
                    className={`w-20 h-20 border-2 rounded-xl shadow-sm overflow-hidden cursor-pointer 
                      transition bg-white p-1 ${
                      isSelected ? 'border-blue-600 shadow-md scale-105' : 'border-gray-200 hover:border-blue-400'
                    }`}
                 >
                    <img src={img} className="w-full h-full object-contain" alt={`view ${idx}`} />
                 </button>
               )})}
             </div>
          </div>

          <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-center bg-white">
             <span className="text-blue-600 text-xs font-extrabold tracking-widest uppercase 
             mb-2 block bg-blue-50 w-fit px-2 py-1 rounded">
                {product.brand || product.category}
             </span>
             <h1 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-2">{product.title}</h1>
            
            <p className="text-gray-600 leading-relaxed mb-8 text-base">{product.description}</p>
            
            <div className="bg-gray-50 p-6 rounded-2xl mb-8 border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-500 text-sm font-bold">Price</span>
                  <div className="text-right">
                    <span className="text-3xl font-black text-gray-900">${product.price}</span>
                    <span className="text-sm text-gray-400 line-through block font-medium">
                      Was ${(product.price * 1.2).toFixed(2)}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                   <span className="text-gray-500 text-sm font-bold">Availability</span>
                   {!isOutOfStock && !isMaxStockReached ? (
                      <span className="text-green-600 font-bold bg-green-100 px-3 py-1 
                      rounded-full text-xs">In Stock ({product.stock})</span>
                    ) : (
                      <span className="text-red-600 font-bold bg-red-100 px-3 py-1 rounded-full text-xs">
                        {isOutOfStock ? 'Out of Stock' : 'Max Limit Reached'}
                      </span>
                    )}
                </div>
            </div>

            <div className="flex flex-col gap-3 mt-auto">
               <button className="w-full bg-gray-900 text-white py-4 
               rounded-xl font-bold hover:bg-gray-800 transition shadow-lg flex items-center justify-center gap-2 text-lg">
                 Buy Now
               </button>
               
               <button 
                 onClick={() => {
                    if (!isMaxStockReached) handleAddToCart(product);
                 }}
                 disabled={isOutOfStock || isMaxStockReached}
                 className={`w-full border-2 border-gray-200 
                  text-gray-900 py-4 rounded-xl font-bold hover:border-blue-600 
                  hover:text-blue-600 hover:bg-blue-50 transition flex items-center justify-center gap-2 ${
                   (isOutOfStock || isMaxStockReached) ? 'opacity-50 cursor-not-allowed bg-gray-50' : ''
                 }`}
               >
                 <ShoppingCart size={20} /> 
                 {isOutOfStock 
                    ? 'Out of Stock' 
                    : isMaxStockReached 
                        ? 'Max Quantity Added' 
                        : 'Add to Cart'}
               </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;