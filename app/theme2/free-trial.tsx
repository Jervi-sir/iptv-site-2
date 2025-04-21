'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useSpring, animated } from '@react-spring/web';
import { contacts } from '@/db/contacts';

export const FreeTrialSection = () => {
  // React Spring animation for button hover effect
  const [buttonProps, buttonApi] = useSpring(() => ({
    from: { scale: 1 },
    config: { tension: 200, friction: 10 },
  }));

  // React Spring animation for border-to-background effect
  const [borderProps, borderApi] = useSpring(() => ({
    from: { height: '2px', bottom: '0', background: '#6b21a8' },
    config: { tension: 100, friction: 10 },
  }));

  const handleButtonHover = () => {
    buttonApi.start({ scale: 1.05 });
  };

  const handleButtonUnhover = () => {
    buttonApi.start({ scale: 1 });
  };

  const handleTextHover = () => {
    borderApi.start({
      height: '42px',
      bottom: '0',
      background: 'rgba(107, 33, 168, 0.5)', // Light violet background
    });
  };

  const handleTextUnhover = () => {
    borderApi.start({
      height: '2px',
      bottom: '0',
      background: '#6b21a8', // Violet border
    });
  };

  return (
    <section id="free-trial" className="py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Start Your{' '}
          <span
            className="relative inline-block cursor-pointer"
            onMouseEnter={handleTextHover}
            onMouseLeave={handleTextUnhover}
          >
            <span className='relative z-10'>Free 24-Hour Pass📚</span>
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
          <span className="gradient-heading">Learning Journey</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Explore 50,000+ e-books, audiobooks, podcasts, and video courses with no commitment. Begin your path to growth today!
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
              aria-label="Start your free 24-hour trial"
            >
              Start Free Trial
            </Button>
          </animated.div>
        </Link>
      </div>
    </section>
  );
};