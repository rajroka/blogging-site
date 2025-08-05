'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const categories = [
  { name: 'Electronics', image: '/44.png' },
  { name: 'Fashion', image: '/66.png' },
  { name: 'Books', image: '/55.png' },
  { name: 'Fitness', image: '/hero.png' },
];

const Hero: React.FC = () => {
  const [activeIndex] = useState(0); // You can change this index to display a different image

  const activeCategory = categories[activeIndex];

  return (
    <div className="min-h-screen  w-full flex flex-col md:flex-row bg-amber-300 px-4 md:px-12 lg:px-20 py-6 md:py-10">
      {/* Left Sidebar */}
      <aside className="w-full md:w-1/4 bg-black h-screen  text-white grid grid-cols-1  p-2  rounded-md">
      
      <h2 className='text-white  manu  font-bold text-3xl   z-10  '>Life with sport</h2>
       <div className='w-full h-100  bg-fuchsia-400 rounded relative  '>

        <Image  src="/player.jpg" fill alt='player' />
        
         </div>
       <div className='w-full  bg-fuchsia-400'>Lower part </div>
      </aside>

      {/* Center Content */}
      <main className="w-full md:w-2/4 bg-white h-screen  flex flex-col justify-center items-center p-6 rounded-lg shadow-lg mx-2 my-4 md:my-0">
        {activeCategory && (
          <div className="relative h-full   w-full bg-fuchsia-400  md:h-64 rounded-lg overflow-hidden shadow-md">
            
            <Image
              src={activeCategory.image}
              alt={`${activeCategory.name} image`}
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        )}

      
      </main>

      {/* Right Sidebar */}
      <aside className="w-full md:w-1/4 bg-black text-white flex items-center justify-center p-6 rounded-md">
        <p className="text-lg font-semibold tracking-wide">Right Sidebar</p>
      </aside>
    </div>
  );
};

export default Hero;
