import { createContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const cartContext = createContext(undefined);

const CartProvider = ({ children }) => {
  /*  const [cartBasket, setCartBasket] = useState([]); */
  const [cartBasket, setCartBasket] = useLocalStorage('shopping-cart', []);

  const addToCart = (item) => {
    setCartBasket([item]);
  };

  const deleteItemFromCart = (id) => {
    setCartBasket((prev) => prev.filter((item) => item.id !== id));
  };


  return (
    <cartContext.Provider value={{ cartBasket, addToCart, deleteItemFromCart }}>
      {children}
    </cartContext.Provider>
  );
};
export default CartProvider;
