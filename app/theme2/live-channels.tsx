'use client';

import { useSpring, animated } from '@react-spring/web';

export const LiveChannelsSection = () => {
  const images = [
    { name: 'BBC', url: './channels-2/bbc.webp' },
    { name: 'Bein Sports', url: './channels-2/bein-sports.webp' },
    { name: 'Canal+ Premium', url: './channels-2/canal-premium.webp' },
    { name: 'CNBC', url: './channels-2/cnbc.webp' },
    { name: 'Fox', url: './channels-2/fox.webp' },
    { name: 'Sky Sports', url: './channels-2/sky-sports.webp' },
  ];

  return (
    <section id="live-channels" className="py-14 pb-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          More than <span className="gradient-heading">30,000 LIVE TV Channels</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((item, index) => {
            // React Spring animation for hover effect
            const [springProps, api] = useSpring(() => ({
              opacity: 0.8,
              scale: 1,
              config: { tension: 200, friction: 20 },
            }));

            const handleHover = () => {
              api.start({ opacity: 1, scale: 1.05 });
            };

            const handleUnhover = () => {
              api.start({ opacity: 0.8, scale: 1 });
            };

            return (
              <>
                {/* @ts-ignore */}
                <animated.div
                  key={index}
                  style={springProps}
                  onMouseEnter={handleHover}
                  onMouseLeave={handleUnhover}
                  className="w-32 shadow-md bg-white p-4 rounded-lg mx-auto"
                >
                  <img
                    src={item.url}
                    alt={item.name}
                    className="h-20 object-contain"
                  />
                </animated.div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};