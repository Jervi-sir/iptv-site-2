import { useSpring, animated } from '@react-spring/web';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const contacts = {
  whatsapp: 'https://wa.me/1234567890', // Update with actual link
};

export const FreeTrialSection = () => {
  const [isTextHovered, setIsTextHovered] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const borderProps = useSpring({
    borderBottom: isTextHovered ? '2px solid #3b82f6' : '2px solid transparent',
    config: { tension: 200, friction: 20 },
  });

  const buttonProps = useSpring({
    scale: isButtonHovered ? 1.05 : 1,
    config: { tension: 200, friction: 20 },
  });

  const handleTextHover = () => setIsTextHovered(true);
  const handleTextUnhover = () => setIsTextHovered(false);
  const handleButtonHover = () => setIsButtonHovered(true);
  const handleButtonUnhover = () => setIsButtonHovered(false);

  return (
    <section id="free-trial" className="py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Try{' '}
          <span
            className="relative inline-block cursor-pointer"
            onMouseEnter={handleTextHover}
            onMouseLeave={handleTextUnhover}
          >
            <span className="relative z-10">Free for 7 Days 🚀</span>
            <animated.div
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                zIndex: 1,
                borderRadius: '0.25rem',
                ...borderProps,
              }}
            />
          </span>{' '}
          <span className="gradient-heading">No Commitment</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Test all GrowEasy tools risk-free. Automate, schedule, and grow with zero upfront cost.
        </p>
        <Link href={contacts.whatsapp}>
          {/* @ts-ignore */}
          <animated.div
            style={buttonProps}
            onMouseEnter={handleButtonHover}
            onMouseLeave={handleButtonUnhover}
          >
            <Button
              className="btn-primary text-lg px-8 py-6 rounded-full"
              aria-label="Start your free 7-day trial"
            >
              Start Free Trial
            </Button>
          </animated.div>
        </Link>
      </div>
    </section>
  );
};