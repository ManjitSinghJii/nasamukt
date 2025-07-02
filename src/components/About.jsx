import React from 'react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-20">

      {/* About Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold">About Latmukt</h1>
          <p className="text-gray-700 text-base sm:text-lg">
            Dedicated to providing organic solutions for overcoming drug and alcohol challenges through our unique product.
          </p>
          <button className="border-2 border-black px-6 py-2 rounded-full hover:bg-black hover:text-white transition duration-300">
            Shop
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img src="/images/about/a.jpg" alt="Product 1" className="rounded-xl w-full h-40 sm:h-52 md:h-60 lg:h-72 object-cover" />
          <img src="/images/about/b.jpg" alt="Product 2" className="rounded-xl w-full h-40 sm:h-52 md:h-60 lg:h-72 object-cover" />
        </div>
      </section>

      {/* Project Section */}
      <section className="text-center">
        <h2 className="text-2xl sm:text-3xl font-bold">Latmukt Project</h2>
        <p className="text-gray-600 text-sm sm:text-base mt-2">
          Dedicated to providing organic solutions for addiction recovery.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {[
            {
              title: 'Organic Medicine',
              text: 'Focusing on natural healing for addiction and recovery.',
              img: '/images/about/c.jpg'
            },
            {
              title: 'Our Mission',
              text: 'Committed to combating drug and alcohol dependency effectively.',
              img: '/images/about/d.jpg'
            },
            {
              title: 'Single Product',
              text: 'Offering one unique solution for addiction treatment.',
              img: '/images/about/e.jpg'
            },
            {
              title: 'Community Support',
              text: 'Empowering individuals through education and resources for recovery.',
              img: '/images/about/f.jpg'
            },
          ].map((item, i) => (
            <div key={i} className="space-y-2 text-left">
              <img src={item.img} alt={item.title} className="rounded-xl w-full h-40 sm:h-48 md:h-56 object-cover" />
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.text}</p>
              <span className="text-xl">→</span>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="text-center">
        <h2 className="text-2xl sm:text-3xl font-bold">Latmukt Gallery</h2>
        <p className="text-gray-600 text-sm sm:text-base mt-2">Showcasing our mission against drugs with organic medicine solutions.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {[
            '/images/about/g.jpg',
            '/images/about/h.jpg',
            '/images/about/i.jpg',
            '/images/about/j.jpg',
            '/images/about/a.jpg',
            '/images/about/b.jpg',
          ].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Gallery ${i + 1}`}
              className="rounded-xl w-full h-44 sm:h-52 md:h-60 object-cover"
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
