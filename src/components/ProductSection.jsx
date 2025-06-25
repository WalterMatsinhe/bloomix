import React from 'react';
import { BellRing } from 'lucide-react';
import SubscriptionModal from './SubscriptionModal';

const ProductSection = ({ isModalOpen, setIsModalOpen }) => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
  };

  return (
    <section id='product' className='py-24 px-4 relative'>
      <div className='container mx-auto max-w-5xl -mt-8'>
        <h2 className='text-space text-3xl md:text-4xl font-bold mb-5 text-center'>
          Our<span className='text-primary'> Product</span>
        </h2>

        <div className='flex flex-col justify-center items-center'>
          <div className='w-full h-auto sm:w-[500px] sm:h-[250px] md:w-[600px] md:h-[300px] lg:w-[800px] lg:h-[400px] xl:w-[900px] xl:h-[450px] 2xl:w-[955px] 2xl:h-[455px] relative rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
            <img
              src='/vita-shield.png'
              alt='juices'
              className='w-full h-full rounded-lg border-4'
            />
          </div>

          <button
            className='subscribe-button text-xl'
            onClick={() => setIsModalOpen(true)}
          >
            Subscribe<span><BellRing className='ml-3' /></span>
          </button>

          <SubscriptionModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onSubmit={handleSubmit}
            formData={formData}
            onChange={handleChange}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
