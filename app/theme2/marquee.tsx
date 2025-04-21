'use client'
import React, { useEffect, useRef } from 'react';
import Marquee from "react-fast-marquee";

export const MarqueeSection = () => {

  return (
    <div
      className="w-full pb-10 inline-flex flex-nowrap overflow-hidden [mask-image:linear-gradient(to_right,transparent_0,black_128px,black_calc(100%-128px),transparent_100%)]"
    >
      <Marquee autoFill direction='right'>
        {[
          { name: 'afl', url: './channels/afl.webp' },
          { name: 'caf', url: './channels/caf.webp' },
          { name: 'cricket', url: './channels/cricket.webp' },
          { name: 'f1', url: './channels/f1.webp' },
          { name: 'fifa', url: './channels/fifa.webp' },
          { name: 'nfl', url: './channels/nfl.webp' },
          { name: 'nhl', url: './channels/nhl.webp' },
          { name: 'nrl', url: './channels/nrl.webp' },
          { name: 'premiere', url: './channels/premiere.webp' },
          { name: 'uefa', url: './channels/uefa.webp' },
          { name: 'ufc', url: './channels/ufc.webp' },
          { name: 'world', url: './channels/world.webp' },
        ].map((item, index) => (
          <div key={index}>
            <img src={item.url} alt={item.name} className='h-20' />
          </div>
        ))}
      </Marquee>
    </div>
  );
};