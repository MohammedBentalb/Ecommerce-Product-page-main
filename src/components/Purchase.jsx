import { useState } from 'react';
import { cartIcon, minus, plus } from '../assets';
import useCart from '../hooks/useCart';

function Purchase() {
  const [numberOfItem, setNumberOfItem] = useState(0);

  const { addToCart } = useCart();

  const item = {
    id: Math.random() * 0.1235468 + 2,
    title: 'Fall Limited Edition Sneakers',
    price: 125,
    quantity: numberOfItem,
  };

  return (
    <div className="purchase">
      <div className="add-sub">
        <button name="plus" aria-label="Increase quantity">
          <img
            src={minus}
            alt=""
            width={12}
            height={3.332}
            onClick={() => {
              setNumberOfItem((prev) => {
                if (prev === 0) return 0;
                return prev - 1;
              });
            }}
          />
        </button>
        <h1>{numberOfItem}</h1>
        <button name="minus" aria-label="Decrease quantity">
          <img
            src={plus}
            alt=""
            width={12}
            height={12}
            onClick={() => {
              setNumberOfItem((prev) => {
                if (prev === 99) return prev;
                return prev + 1;
              });
            }}
          />
        </button>
      </div>
      <button
        aria-label="Add to cart"
        name="add"
        onClick={() => {
          if (numberOfItem > 0) addToCart(item);
        }}
      >
        <img src={cartIcon} alt="cart icon" width={17.457} height={16} />
        Add to cart
      </button>
    </div>
  );
}

export default Purchase;
