import Thumbnail from './Thumbnail';
import Content from './Content';
import { useEffect, useState } from 'react';
import Preview from './Preview';

function Main() {
  const [preview, setPreview] = useState(false);
  useEffect(() => {
    const closePreview = () => {
      if (preview) {
        setPreview(false);
      }
    };

    window.addEventListener('scroll', closePreview);

    return () => {
      window.addEventListener('scroll', closePreview);
    };
  }, [preview]);
  return (
    <>
      {preview && <Preview  setPreview={setPreview}/>}
      <section className="main">
        <Thumbnail setPreview={setPreview} />
        <Content />
      </section>
      <section className="author">
        <p className="owner">
          <a
            href="https://www.frontendmentor.io/home"
            rel="noreferrer noopener"
            target="_blank"
          >
            Frontend challenge
          </a>
          . Coded by
          <a
            href="https://github.com/MohammedBentalb"
            rel="noreferrer noopener"
            target="_blank"
          >
            {' '}
            Mohammed Bentalb
          </a>
        </p>
      </section>
    </>
  );
}

export default Main;
