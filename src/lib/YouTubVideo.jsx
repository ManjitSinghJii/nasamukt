import { PlusCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';

const YouTubVideo = () => {
  return (
    <div>
        <div className='flex flex-col justify-center items-center p-14 gap-6'>
            <h1 className='text-6xl text-zinc-600 font-semibold text-center'>🌿 Lat Mukt  –  Organic Solution for Freedom from Addiction</h1>
            <p className='text-green-600 text-xl font-semibold'>नशा मुक्त जीवन की ओर एक प्राकृतिक कदम।</p>
        </div>
        <div className="flex flex-col gap-10 justify-center items-center p-4">
            <div className=" w-10/12  aspect-video">
                <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&controls=1&mute=0&rel=0&modestbranding=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                    allowFullScreen
                ></iframe>
            </div>
            
            <section className='flex justify-around items-center px-14 w-full gap-8 '>
                <div className='w-[40%] aspect-video'>
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&controls=1&mute=0&rel=0&modestbranding=1"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                        allowFullScreen
                    ></iframe>
                </div>

                <div className='w-[40%] aspect-video'>
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&controls=1&mute=0&rel=0&modestbranding=1"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                        allowFullScreen
                    ></iframe>
                </div>
            </section>
            <button className='px-6 bg-[#216c4d] text-white py-4 rounded-xl hover:bg-amber-600'>{<PlusCircleOutlined  className='mr-2'/>}Order Now!</button>
            </div>
    </div>
  );
};

export default YouTubVideo;
