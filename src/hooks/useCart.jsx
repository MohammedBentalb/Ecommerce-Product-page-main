import { useContext } from 'react';
import { cartContext } from '../context/cartContext';

function useCart() {
  const context = useContext(cartContext);
  if (!context) throw new Error('cart being used outside the context');

  return context;
}

export default useCart;
