import { createContext, useContext, useState, type ReactNode } from 'react';
import type { Product } from '../../models/ProductModel';
import Swal from 'sweetalert2';

type CartItem = Product & { quantity: number };
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);


  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });

  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      
      if (existing) {
        Toast.fire({
          icon: "info",
          title: "Cart updated",
          text: `${product.title} quantity increased`
        });
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      
      Toast.fire({
        icon: "success",
        title: "Added to cart",
        text: `${product.title} has been added`
      });
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this action!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6", 
      cancelButtonColor: "#d33",    
      confirmButtonText: "Yes, remove it!"
    }).then((result) => {

      if (result.isConfirmed) {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
        
        Swal.fire({
          title: "Removed!",
          text: "Your item has been removed.",
          icon: "success",
          timer: 1500,
          showConfirmButton: false
        });
      }
    });
  };
  const updateQuantity = (id: number, quantity: number) => {
    const currentItem = cartItems.find((item) => item.id === id);

    if (!currentItem) return;

    if (quantity < 1) {
      Toast.fire({
        icon: "warning",
        title: "Minimum Limit",
        text: "Quantity cannot be less than 1"
      });
      return; 
    }

    if (quantity > currentItem.stock) {
      Toast.fire({
        icon: "error",
        title: "Out of Stock",
        text: `Only ${currentItem.stock} items available in stock!`
      });
      return; 
    }

    setCartItems((prev) => 
      prev.map((item) => 
        item.id === id ? { ...item, quantity: quantity } : item
      )
    );
  };

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};