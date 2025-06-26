import { ArrowDown } from 'lucide-react';
import React from 'react';
import { BellRing } from 'lucide-react';

const HeroSection = ({ setIsModalOpen }) => {
  return (
    <section
      id='hero'
      className='relative min-h-screen flex flex-col items-center justify-center px-4'
    >
      <div className='container max-w-4xl mx-auto text-center z-10 '>
        <div className='space-y-6 '>
          <h1 className='text-4xl md:text-6xl font-bold tracking-tight'>
            <span className='opacity-0 animate-fade-in delay-[0ms]'>Boost your </span>
            <span className='opacity-0 text-primary animate-fade-in delay-[300ms]'> Immunity </span>
            <span className='opacity-0 text-gradient ml-2 animate-fade-in delay-[500ms]'>Naturally</span>
          </h1>
          <p className='text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mt-10 mb-8 opacity-0 animate-fade-in-delay-3'>
            Your daily boost of pure, plant-based nutrition — crafted to support immunity and vitality in seniors without side effects, synthetics, or confusion.
            We believe every senior deserves easy access to clean, effective nutrition. Our juice blend delivers non-processed,
            bioavailable nutrients to strengthen the body, support immunity, and promote a healthy lifestyle — the natural way.
          </p>
          <div className='pt-4  opacity-0 animate-fade-in-delay-4 flex flex-col sm:flex-row gap-6 justify-center '>
            <a className='text-xl cosmic-button flex justify-center items-center ' href='#product'>
              View Product
            </a>
            <button
              className='flex  justify-center items-center gap-2 px-6 py-2 rounded-full border-primary text-primary-foreground hover:bg-red-600 
                transition-colors duration-300 max-sm:items-center'
              onClick={() => setIsModalOpen(true)}
            >
              Subscribe<span><BellRing className='ml-3' /></span>
            </button>
          </div>
        </div>
      </div>
      <div className='hidden md:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce'>
        <span className='text-sm text-muted-foreground mb-2'>scroll</span>
        <ArrowDown className='h-5 w-5 text-primary' />
      </div>
    </section>
  );
};

export default HeroSection;
