import { useState } from 'react';
import {
  arrowLeft,
  arrowRight,
  cross,
  product1,
  product2,
  product3,
  product4,
} from '../assets';
import ImagesList from './ImagesList';

function Preview({ setPreview }) {
  const [imgIndex, setImgIndex] = useState(0);
  const images = [product1, product2, product3, product4];
  return (
    <section className="preview">
      <div className="prev-arrows">
        <img
          src={cross}
          alt=""
          width={20}
          height={20}
          className="cross"
          onClick={() => setPreview(false)}
        />
        <img
          src={arrowRight}
          alt=""
          className="arrow-right"
          width={56}
          height={56}
          onClick={() =>
            setImgIndex((prev) => {
              if (prev === 3) return 0;
              return prev + 1;
            })
          }
        />
        <div className="prev-slider">
          {images.map((img, index) => (
            <img
              src={img}
              alt=""
              width={445}
              height={445}
              key={index}
              style={{
                transform: `translateX(${imgIndex * -100}%)`,
                cursor: 'default',
                transition: 'transform 200ms ease-out',
              }}
            />
          ))}
        </div>
        <img
          src={arrowLeft}
          alt=""
          className="arrow-left"
          width={56}
          height={56}
          onClick={() =>
            setImgIndex((prev) => {
              if (prev === 0) return 3;
              return prev - 1;
            })
          }
        />
      </div>
      <ImagesList
        images={images}
        imgIndex={imgIndex}
        setImgIndex={setImgIndex}
      />
    </section>
  );
}

export default Preview;
