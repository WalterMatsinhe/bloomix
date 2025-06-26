import React, { useState } from 'react';
import ThemeToggle from '../components/ThemeToggle';
import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProductSection from '../components/ProductSection';
import ContactSection from '../components/ContactSection';
import SubscriptionModal from '../components/SubscriptionModal';
import Footer from '../components/Footer';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
  };

  return (
    <div className='relative'>
      <div className={`${isModalOpen ? 'blur-sm pointer-events-none select-none' : ''} transition-all duration-300  backdrop-blur-sm`}>
        <ThemeToggle />
        <NavBar />
        <main>
          <HeroSection
            setIsModalOpen={setIsModalOpen}
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
          <ProductSection
            setIsModalOpen={setIsModalOpen}
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
          <AboutSection />
          <ContactSection />
        </main>
      </div>

      {isModalOpen && (
        <div className='fixed inset-0 z-50 flex justify-center items-center'>
          <SubscriptionModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onSubmit={handleSubmit}
            formData={formData}
            onChange={handleChange}
          />
        </div>
      )}
    </div>
  );
};

export default Home;
