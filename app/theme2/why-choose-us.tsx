'use client';

import { useSpring, animated } from '@react-spring/web';
import {
  Shield,
  Server,
  Video,
  DollarSign,
  Headphones,
  Zap,
  Book,
} from 'lucide-react';

export const WhyChooseUsSection = () => {

  return (
    <section id="why-choose-us" className="py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          WHY <span className="gradient-heading">CHOOSE LEARNSPHERE</span>
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Your Trusted Partner for Lifelong Learning
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Curated Content",
              description: "Handpicked resources for maximum value.",
              icon: <Book className="text-purple-600" size={32} />,
            },
            {
              title: "Secure Platform",
              description: "Your data is safe with us.",
              icon: <Shield className="text-purple-600" size={32} />,
            },
            {
              title: "High-Performance Access",
              description: "Fast, reliable content delivery.",
              icon: <Server className="text-purple-600" size={32} />,
            },
            {
              title: "Fresh Content Weekly",
              description: "Stay inspired with new releases.",
              icon: <Video className="text-purple-600" size={32} />,
            },
            {
              title: "Affordable Plans",
              description: "Learning that fits your budget.",
              icon: <DollarSign className="text-purple-600" size={32} />,
            },
            {
              title: "24/7 Support",
              description: "We’re here to help, anytime.",
              icon: <Headphones className="text-purple-600" size={32} />,
            },
          ].map((feature, index) => {
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
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </animated.div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};