import { del, product1Tumb } from '../assets';
import { currencyFormatter } from '../utils/currencyFormatter';

function CartElements({ cartBasket, deleteItemFromCart }) {
  return (
    <>
      {cartBasket?.map((item) => (
        <div className="element" key={item.id}>
          <img src={product1Tumb} alt="shoe picture" />
          <div className="element-divider">
            <p>{item.title}</p>
            <div className='cart-prices'>
              <p>{`${currencyFormatter(item.price)} x ${currencyFormatter(
                item.quantity
              )}`}</p>
              <p>{currencyFormatter(item.price * item.quantity)}</p>
            </div>
          </div>
          <img
            src={del}
            alt=""
            id="trash"
            width={14}
            height={16}
            onClick={() => deleteItemFromCart(item.id)}
          />
        </div>
      ))}
    </>
  );
}

export default CartElements;
