import { useSpring, animated } from '@react-spring/web';
import { Book, DollarSign, Globe, Headphones, Server, Shield } from 'lucide-react';

export const WhyChooseUsSection = () => {
  const features = [
    {
      title: 'All-in-One Tools',
      description: 'Access 10+ tools in one subscription.',
      icon: <Book className="text-zinc-500" size={32} />,
    },
    {
      title: 'Seamless Integrations',
      description: 'Connect with 50+ apps you love.',
      icon: <Globe className="text-zinc-500" size={32} />,
    },
    {
      title: 'Secure & Reliable',
      description: 'Your data is safe with us.',
      icon: <Shield className="text-zinc-500" size={32} />,
    },
    {
      title: 'Affordable Pricing',
      description: 'Plans that fit any budget.',
      icon: <DollarSign className="text-zinc-500" size={32} />,
    },
    {
      title: 'Fast Performance',
      description: 'Cloud-based tools, always ready.',
      icon: <Server className="text-zinc-500" size={32} />,
    },
    {
      title: '24/7 Support',
      description: 'We’re here to help, anytime.',
      icon: <Headphones className="text-zinc-500" size={32} />,
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 px-6 md:px-12 bg-zinc-950">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Why <span className="gradient-heading">GrowEasy</span>?
        </h2>
        <p className="text-lg text-gray-400 mb-8">
          The simplest way to power your business with digital tools
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const [springProps, api] = useSpring(() => ({
              scale: 1,
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              config: { tension: 200, friction: 20 },
            }));

            const handleHover = () => {
              api.start({
                scale: 1.05,
                boxShadow: '0 8px 12px rgba(0, 0, 0, 0.2)',
              });
            };

            const handleUnhover = () => {
              api.start({
                scale: 1,
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              });
            };

            return (
              <>
                {/* @ts-ignore */}
                <animated.div
                  key={index}
                  style={springProps}
                  onMouseEnter={handleHover}
                  onMouseLeave={handleUnhover}
                  className="bg-zinc-900 p-6 rounded-lg shadow-md"
                >
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-300 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-200">{feature.description}</p>
                </animated.div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};