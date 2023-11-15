import Purchase from './Purchase';
import { currencyFormatter } from '../utils/currencyFormatter';

function Content() {
  return (
    <section className="content">
      <div className="content-header">
        <h1>
          Fall Limited Edition <br />
          Sneakers
        </h1>
        <p>Sneaker Company</p>
      </div>
      <div className="content-info">
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="promo-div">
          <div className="price">
            <h1>{currencyFormatter(150)}</h1>
            <h2>50%</h2>
          </div>
          <h2>
            <s>{currencyFormatter(250)}</s>
          </h2>
        </div>
      </div>
      <Purchase />
    </section>
  );
}

export default Content;
