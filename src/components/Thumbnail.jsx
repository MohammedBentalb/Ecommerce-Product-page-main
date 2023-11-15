import { useState } from 'react';
import { product1, product2, product3, product4 } from '../assets';
import ImagesList from './ImagesList';

function Thumbnail({ setPreview }) {
  const [imgIndex, setImgIndex] = useState(0);
  const images = [product1, product2, product3, product4];
  return (
    <section className="images-container">
      <div className="slider">
        {images.map((img, index) => (
          <img
            src={img}
            alt=""
            width={445}
            height={445}
            key={index}
            loading="lazy"
            style={{
              transform: `translateX(${imgIndex * -100}%)`,
            }}
            onClick={() => setPreview(true)}
          />
        ))}
      </div>
      <ImagesList
        images={images}
        imgIndex={imgIndex}
        setImgIndex={setImgIndex}
      />
    </section>
  );
}

export default Thumbnail;
