import { useState, useEffect } from 'react';
import { cartIcon } from '../assets';
import useCart from '../hooks/useCart';
import CartElements from './CartElements';

function Cart() {
  const [cartOpen, setCartOpen] = useState(false);
  const { cartBasket, deleteItemFromCart } = useCart();

  const cartWindow = document.querySelector('.cart-window');

  useEffect(() => {
    const toggleCart = () => {
      if (cartWindow) {
        if (cartOpen) cartWindow.classList.add('show-window');
        if (!cartOpen) cartWindow.classList.remove('show-window');
      }
    };
    toggleCart();
  }, [cartOpen, cartWindow]);

  return (
    <div className="cart-divider">
      <div className='cart-number-rel'>
        <img
          src={cartIcon}
          alt="cart"
          width={21.82}
          height={20}
          className="cart"
          onClick={() => {
            setCartOpen((prev) => !prev);
          }}
        />
        {cartBasket.length > 0 && (
          <div
            className="item-number"
            onClick={() => setCartOpen((prev) => !prev)}
          >
            {cartBasket.reduce((total, item) => total + item.quantity, 0)}
          </div>
        )}
      </div>
      <div className="cart-window">
        <h1>Cart</h1>
        <div className="cart-items">
          {cartBasket?.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <CartElements
              cartBasket={cartBasket}
              deleteItemFromCart={deleteItemFromCart}
            />
          )}
          {cartBasket?.length === 0 ? null : <button>CheckOut</button>}
        </div>
      </div>
    </div>
  );
}

export default Cart;
