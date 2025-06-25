import React from 'react'
import ThemeToggle from '../components/ThemeToggle';
import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProductSection from '../components/ProductSection';

const Home = () => {
  return (
    <div>
      <ThemeToggle/>
      <NavBar/>
      <main>
        <HeroSection/>
        <ProductSection/>
        <AboutSection/>
      </main>
    </div>
  )
}

export default Home;
