import { useEffect, useState } from 'react';
import { Book, Globe, Headphones, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-24 px-6 overflow-hidden max-w-7xl mx-auto">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 right-0 bg-blue-200/10 w-96 h-96 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 bg-green-200/10 w-96 h-96 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`space-y-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
              Streamline Your Business with <span className="gradient-heading">{process.env.NEXT_PUBLIC_SITE_NAME}</span>
            </h1>
            <p className="text-md md:text-lg text-gray-700">
              Access 10+ premium digital tools for productivity, automation, and growth, all in one affordable subscription on {process.env.NEXT_PUBLIC_SITE_NAME}.
            </p>
            <div className="flex flex-wrap gap-4 pt-0">
              <Link href={`${process.env.NEXT_PUBLIC_REDIRECT_TO}/checkout`}>
                <Button className="btn-primary text-lg cursor-pointer">Get Started Now</Button>
              </Link>
              <Link href="/#pricing">
                <Button variant="outline" className="text-lg cursor-pointer hover:bg-blue-200 hover:text-blue-800 hover:scale-105">Explore Plans</Button>
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 pt-4 text-sm">
              <div className="flex items-center gap-2">
                <Zap size={20} className="text-blue-500" />
                <span>10+ Digital Tools</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe size={20} className="text-blue-500" />
                <span>50+ Integrations</span>
              </div>
              <div className="flex items-center gap-2">
                <Headphones size={20} className="text-blue-500" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Book size={20} className="text-blue-500" />
                <span>Weekly Updates</span>
              </div>
            </div>
          </div>
          <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="card-highlight p-4 md:p-4 border-blue-500 border-2 overflow-hidden">
              <div className="relative rounded-lg overflow-hidden shadow-2xl aspect-video">
                <img src="/hero.jpg" alt="GrowEasy Dashboard" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};