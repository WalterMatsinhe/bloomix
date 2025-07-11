import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'Product', href: '#product' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact'},  
];

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed w-full z-40 transition-all duration-300',
        isScrolled
          ? 'py-3 bg-background/80 backdrop-blur-md shadow-xs'
          : 'py-5'
      )}
    >
      <div className='container flex items-center justify-between '>
        <a href='#hero' className='text-2xl font-bold -md:13'>
          <span className='relative z-10 text-glow text-foreground pl'>
            Bloo<span className='text-primary '>mix</span>
          </span>
        </a>

        <div className='hidden md:flex space-x-8'>
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className='text-xl text-foreground/80 text-glow hover:text-primary transition-colors duration-300'
            >
              {item.name}
            </a>
          ))}
        </div>
 
        <button 
          onClick={() => setIsMenuOpen((prev) => !prev)} 
          className='md:hidden p-2 text-foreground z-50'
          aria-label= {isMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div
          className={cn(
            'fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center',
            'transition-all duration-300 text-glow',
            isMenuOpen
              ? 'opacity-100 pointer-events-auto'
              : 'opacity-0 pointer-events-none'
          )}
        >
          <div className='flex flex-col space-y-6 text-xl'>
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className='text-foreground/80 hover:text-primary transition-colors duration-300  '
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
