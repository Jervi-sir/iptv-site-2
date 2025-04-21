'use client';
import React from 'react';
import Marquee from 'react-fast-marquee';
import Typewriter from 'typewriter-effect';

export const ProvidersSection = () => {
  const services = [
    'Netflix',
    'Hulu',
    'Apple TV+',
    'Amazon Prime',
    'Disney+',
    'HBO Max',
  ];

  return (
    <div className="w-full flex flex-col flex-nowrap overflow-hidden [mask-image:linear-gradient(to_right,transparent_0,black_128px,black_calc(100%-128px),transparent_100%)]">
      <div className="text-center text-2xl md:text-4xl font-semibold text-gray-800 py-10">
        Enjoy{' '}
        <span className="inline-block gradient-heading">
          <Typewriter
            options={{
              strings: services,
              autoStart: true,
              loop: true,
              delay: 50, // Typing speed (ms per character)
              deleteSpeed: 30, // Deleting speed (ms per character)
              // @ts-ignore
              pauseFor: 1500, // Pause after typing each service (ms)
              cursor: '', // Default cursor
              cursorClassName: 'text-violet-600', // Match theme
            }}
          />
        </span>{' '}
        with {process.env.NEXT_PUBLIC_SITE_NAME}
      </div>
      <Marquee>
        {[
          { name: 'Apple TV', url: './providers/appletv.webp' },
          { name: 'Disney', url: './providers/disney.webp' },
          { name: 'HBO Max', url: './providers/hbomax.webp' },
          { name: 'Hulu', url: './providers/hulu.webp' },
          { name: 'Netflix', url: './providers/netflix.webp' },
          { name: 'Prime Video', url: './providers/primevideo.webp' },
        ].map((item, index) => (
          <div key={index} className="rounded-xl overflow-hidden mx-4">
            <img src={item.url} alt={item.name} className="h-80" />
          </div>
        ))}
      </Marquee>
    </div>
  );
};