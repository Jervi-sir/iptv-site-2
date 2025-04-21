'use client'
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full py-4 px-6 md:px-12 bg-white/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold gradient-heading">{ process.env.NEXT_PUBLIC_SITE_NAME }</Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link href="/" className="font-medium text-gray-700 hover:text-iptv-purple transition-colors">Home</Link>
          <Link href="/#pricing" className="font-medium text-gray-700 hover:text-iptv-purple transition-colors">Pricing</Link>
          <Link href="/#testimonials" className="font-medium text-gray-700 hover:text-iptv-purple transition-colors">Testimonials</Link>
          <Link href={`#pricing`}>
            <Button className="btn-primary">Free Trial</Button>
          </Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-white z-40 animate-fade-in">
          <nav className="flex flex-col items-center pt-10 space-y-6">
            <Link 
              href="/" 
              className="text-xl font-medium text-gray-700 hover:text-iptv-purple transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/#pricing" 
              className="text-xl font-medium text-gray-700 hover:text-iptv-purple transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              href="/#testimonials" 
              className="text-xl font-medium text-gray-700 hover:text-iptv-purple transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link href={`#pricing`} onClick={() => setIsMenuOpen(false)}>
              <Button className="btn-primary text-lg px-8 py-4">Free Trial</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
