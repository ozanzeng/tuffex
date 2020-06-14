import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// Ayarlar için http://react-responsive-carousel.js.org/storybook/?path=/story/* adresine göz ayabilirsin.
const Slider = () => {
  const getConfigurableProps = () => ({
    showArrows: false,
    showThumbs: false,
  });

  return (
    <Carousel {...getConfigurableProps()} axis="vertical">
      <div>
        <img src="https://dummyimage.com/1024/b8b8b8/fff.jpg" alt="Something" />
      </div>
      <div>
        <img src="https://dummyimage.com/1024/b8b8b8/fff.jpg" alt="Something" />
      </div>
      <div>
        <img src="https://dummyimage.com/1024/b8b8b8/fff.jpg" alt="Something" />
      </div>
    </Carousel>
  );
};

export default Slider;
