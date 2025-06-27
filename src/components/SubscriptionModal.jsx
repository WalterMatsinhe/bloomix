import React from 'react';

const SubscriptionModal = ({ isOpen, onClose, onSubmit, formData, onChange }) => {
  if (!isOpen) return null;

  return (
    <div className='bg-card p-8 rounded-lg w-80 shadow-lg'>
      <h2 className='text-primary text-xl font-semibold mb-4'>
        Enter <span className='text-primary'>your</span> Details
      </h2>
      <div className='space-y-4'>
        <div>
          <label className='block text-sm font-medium text-primary-foreground flex items-start'>Name:</label>
          <input
            name='name'
            value={formData.name}
            onChange={onChange}
            className='w-full bg-white text-black border border-input rounded px-3 py-2 mt-1'
            required
          />
        </div>
        <div>
          <label className='block text-sm font-medium text-primary-foreground flex items-start'>Email:</label>
          <input
            name='email'
            type='email'
            value={formData.email}
            onChange={onChange}
            className='w-full bg-white text-black border border-input rounded px-3 py-2 mt-1 flex items-start'
            required
          />
        </div>
        <div>
          <label className='block text-sm font-medium text-primary-foreground flex items-start'>Number:</label>
          <input
            name='phone'
            value={formData.phone}
            onChange={onChange}
            className='w-full bg-white text-black border border-input rounded px-3 py-2 mt-1'
            required
          />
        </div>
        
        <div>
          <label 
            className='block text-sm font-medium text-primary'
          >
            <h2>Subscription Plan:</h2>
          </label>
          <div className='flex flex-col-2 justify-content items-center gap-8'>
            <div className='space-y-2 mt-1'>
            <div className='flex items-center'>
              <input
                type='radio'
                id='monthly'
                name='subscription'
                value='monthly'
                checked={formData.subscription === 'monthly'}
                onChange={onChange}
                className='w-4 h-4 text-primary bg-gray-100 border-gray-300'
              />
              <label htmlFor='monthly' className='ml-2 text-sm text-primary-foreground'>
                Monthly (2800 KSH)
              </label>
            </div>
            
            <div className='flex items-center'>
              <input
                type='radio'
                id='yearly'
                name='subscription'
                value='yearly'
                checked={formData.subscription === 'yearly'}
                onChange={onChange}
                className='w-4 h-4 text-primary bg-gray-100 border-gray-300'
              />
              <label htmlFor='yearly' className='ml-2 text-sm text-primary-foreground'>
                Yearly (33,600 KSH)
              </label>
            </div>
            <div className='flex items-center'>
                  <input
                    type='radio'
                    id='premium'
                    name='subscription'
                    value='premium'
                    checked={formData.subscription === 'premium'}
                    onChange={onChange}
                    className='w-4 h-4 text-primary bg-gray-100 border-gray-300'
                  />
                  <label htmlFor='premium' className='ml-2 text-sm text-primary-foreground'>
                  Premium (28,560 KSH)
                  </label>
              </div>
          </div>
          <div>
            <img src='/mpesa.png' alt='M-Pesa' className='h-11 w-auto' />
          </div>
          </div>

        </div>
        
        <div className='flex gap-3 mt-6'>
          <button
            onClick={onSubmit}
            className='flex-1 bg-primary text-white py-2 px-4 rounded hover:bg-primary/90 transition'
          >
            Submit
          </button>
          <button
            onClick={onClose}
            className='flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded transition'
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionModal;