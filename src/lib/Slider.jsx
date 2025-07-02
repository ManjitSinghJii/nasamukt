import React from 'react';
import { Carousel } from 'antd';

const Slider = () => (
  <div className="">
    <Carousel autoplay className="w-full">
      {['a.jpg', 'b.jpg', 'c.jpg', 'd.jpg'].map((img, index) => (
        <div key={index}>
          <img
            src={`images/${img}`}
            alt={`Slide ${index + 1}`}
            className="w-full h-[300px] sm:h-[300px] md:h-[3500px] lg:h-[380px] object-contain"
          />
        </div>
      ))}
    </Carousel>
  </div>
);

export default Slider;
