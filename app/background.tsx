'use client';

import Image from 'next/image';

import bg from '../public/bg.jpg';

export function Background() {
  const colors = ['bg-array-5', 'bg-array-2', 'bg-array-3', 'bg-array-4'];

  return (
    <div className="grid grid-cols-4 w-full h-full absolute top-0 left-0 z-0">
      {colors.map((color, index) => {
        return (
          <div
            key={`background-color-${color}`}
            className={`hidden md:block ${color}`}></div>
        );
      })}

      <Image
        loader={({src}) => src}
        src={bg}
        width={2000}
        height={1354}
        className={`w-full h-full absolute top-0 left-0 object-cover origin-bottom opacity-75`}
        alt="Elwood Technology, LLC | Software Development & Consulting | Venice, CA"
      />

      <span className="bg-gradient-to-t from-white h-32 w-full absolute bottom-0 left-0"></span>
    </div>
  );
}
