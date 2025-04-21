'use client'
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    rating: 5,
    text: `${process.env.NEXT_PUBLIC_SITE_NAME} transformed my learning journey! The variety of e-books and video courses is incredible, and I love accessing them on any device.`,
    location: 'New York, USA',
  },
  {
    id: 2,
    name: 'Michael Chen',
    rating: 5,
    text: `I’ve tried many learning platforms, but ${process.env.NEXT_PUBLIC_SITE_NAME} stands out for its reliability and quality. The audiobook selection is top-notch!`,
    location: 'Toronto, Canada',
  },
  {
    id: 3,
    name: 'Priya Sharma',
    rating: 4,
    text: 'Amazing value for money and fantastic support. When I had a question, the team responded in minutes. Highly recommend!',
    location: 'London, UK',
  },
  {
    id: 4,
    name: 'David Rodriguez',
    rating: 5,
    text: 'The range of video courses is outstanding. I’ve learned new skills that I couldn’t access elsewhere. Worth every penny!',
    location: 'Barcelona, Spain',
  },
  {
    id: 5,
    name: 'Emma Wilson',
    rating: 5,
    text: `I’ve been using ${process.env.NEXT_PUBLIC_SITE_NAME} for 6 months, and it’s flawless. The app makes learning on the go so easy.`,
    location: 'Sydney, Australia',
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
  return (
    <div className="card-highlight p-6 h-full flex flex-col">
      <div className="flex text-yellow-400 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            fill={i < testimonial.rating ? 'currentColor' : 'none'}
            className={i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}
          />
        ))}
      </div>
      <p className="text-gray-700 italic mb-4 flex-grow">{testimonial.text}</p>
      <div>
        <div className="font-semibold">{testimonial.name}</div>
        <div className="text-gray-500 text-sm">{testimonial.location}</div>
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
    setActiveSlide(prev => (prev >= maxSlide ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide(prev => (prev <= 0 ? maxSlide : prev - 1));
  };

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [activeSlide, maxSlide]);

  return (
    <section id="testimonials" className="py-10 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="gradient-heading">Customers Say</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have upgraded their entertainment experience with { process.env.NEXT_PUBLIC_SITE_NAME }.
          </p>
        </div>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeSlide * (100 / visibleCount)}%)` }}
            >
              {testimonials.map(testimonial => (
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
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} className="text-gray-700" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} className="text-gray-700" />
          </button>
        </div>
        
        <div className="flex justify-center mt-8 space-x-2">
          {[...Array(maxSlide + 1)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                activeSlide === idx ? 'bg-violet-400 w-6' : 'bg-violet-200'
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
