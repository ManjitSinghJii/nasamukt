import React from 'react';
import { Carousel } from 'antd';

const Slider = () => (
  <div className='mt-50'>
    <Carousel autoplay>
      <div>
        <img src='images/a.jpg' alt="Slide 1" className="w-full h-[400px] object-cover" />
      </div>
      <div>
        <img src='images/b.jpg' alt="Slide 2" className="w-full h-[400px] object-cover" />
      </div>
      <div>
        <img src='images/c.jpg' alt="Slide 3" className="w-full h-[400px] object-cover" />
      </div>
      <div>
        <img src='images/d.jpg' alt="Slide 4" className="w-full h-[400px] object-cover" />
      </div>
    </Carousel>
  </div>
);

export default Slider;
