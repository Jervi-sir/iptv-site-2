'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Rachel Adams',
    rating: 5,
    text: `${process.env.NEXT_PUBLIC_SITE_NAME} revolutionized my freelance workflow. The social media planner cuts my scheduling time in half!`,
    location: 'Seattle, USA',
  },
  {
    id: 2,
    name: 'Daniel Kim',
    rating: 5,
    text: `The email marketing tools on ${process.env.NEXT_PUBLIC_SITE_NAME} boosted my campaign performance. My click-through rates have never been higher!`,
    location: 'Auckland, New Zealand',
  },
  {
    id: 3,
    name: 'Priya Gupta',
    rating: 4,
    text: 'The project management features keep my team organized and on schedule. Customer support is always quick to assist!',
    location: 'Manchester, UK',
  },
  {
    id: 4,
    name: 'Luis Morales',
    rating: 5,
    text: `Integrating ${process.env.NEXT_PUBLIC_SITE_NAME} with my CRM was a breeze. It’s an essential tool for my business growth.`,
    location: 'Bogotá, Colombia',
  },
  {
    id: 5,
    name: 'Linh Tran',
    rating: 5,
    text: `The analytics tools provide actionable insights that have transformed my marketing strategy. ${process.env.NEXT_PUBLIC_SITE_NAME} is a game-changer for startups.`,
    location: 'Ho Chi Minh City, Vietnam',
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
  return (
    <div className="card-highlight p-6 h-full flex flex-col">
      <div className="flex text-[oklch(0.80_0.15_80)] mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            fill={i < testimonial.rating ? 'currentColor' : 'none'}
            className={i < testimonial.rating ? 'text-[oklch(0.80_0.15_80)]' : 'text-[var(--color-muted)]'}
          />
        ))}
      </div>
      <p className="text-[var(--color-foreground)] italic mb-4 flex-grow">{testimonial.text}</p>
      <div>
        <div className="font-semibold text-[var(--color-foreground)]">{testimonial.name}</div>
        <div className="text-[var(--color-muted-foreground)] text-sm">{testimonial.location}</div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getVisibleCount = () => {
    if (width < 640) return 1;
    if (width < 1024) return 2;
    return 3;
  };

  const visibleCount = getVisibleCount();
  const maxSlide = testimonials.length - visibleCount;

  const nextSlide = () => {
    setActiveSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
  };

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [activeSlide, maxSlide]);

  return (
    <section id="testimonials" className="py-10 pb-20 px-6 md:px-12 bg-[var(--color-background)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--color-foreground)]">
            What Our <span className="gradient-heading">Viewers Say</span>
          </h2>
          <p className="text-lg text-[var(--color-muted-foreground)] max-w-2xl mx-auto">
            Discover why thousands love streaming with {process.env.NEXT_PUBLIC_SITE_NAME}.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeSlide * (100 / visibleCount)}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full px-4 shrink-0"
                  style={{ width: `${100 / visibleCount}%` }}
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-[var(--color-card)] rounded-full p-2 shadow-lg hover:shadow-xl transition-all z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} className="text-[var(--color-foreground)]" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-[var(--color-card)] rounded-full p-2 shadow-lg hover:shadow-xl transition-all z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} className="text-[var(--color-foreground)]" />
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {[...Array(maxSlide + 1)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                activeSlide === idx ? 'bg-[oklch(0.80_0.15_80)] w-6' : 'bg-[oklch(0.80_0.15_80_/0.3)]'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;