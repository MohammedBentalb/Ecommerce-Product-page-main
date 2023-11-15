import {
  product1Tumb,
  product2Tumb,
  product3Tumb,
  product4Tumb,
} from '../assets';

function ImagesList({ setImgIndex, imgIndex }) {
  const images = [product1Tumb, product2Tumb, product3Tumb, product4Tumb];
  return (
    <div className="img-list">
      {images.map((img, index) => (
        <div
          className={`${imgIndex === index ? 'active-img' : ''}`}
          key={index}
        >
          <img
            src={img}
            alt=""
            width={88}
            height={88}
            onClick={() => {
              setImgIndex(index);
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default ImagesList;
