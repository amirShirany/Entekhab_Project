import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const useCart = () => {
  const { cartItems, addToCart, removeFromCart, updateQuantity } = useContext(CartContext);

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return {
    cartItems,
    totalItems,
    totalPrice,
    addToCart,
    removeFromCart,
    updateQuantity,
  };
};

export default useCart;