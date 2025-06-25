import React from 'react';

const SubscriptionModal = ({ isOpen, onClose, onSubmit, formData, onChange }) => {
  if (!isOpen) return null;

  return (
    <div className='bg-card p-8 rounded-lg w-80 shadow-lg'>
      <h2 className='text-primary text-xl font-semibold mb-4'>
        Enter <span className='text-primary'>your</span> Details
      </h2>
      <form className='space-y-4' onSubmit={onSubmit}>
        <div>
          <label className='block text-sm font-medium text-primary'>Name:</label>
          <input
            name='name'
            value={formData.name}
            onChange={onChange}
            className='w-full bg-white border border-input rounded px-3 py-2 mt-1'
            required
          />
        </div>
        <div>
          <label className='block text-sm font-medium text-primary'>Email:</label>
          <input
            name='email'
            type='email'
            value={formData.email}
            onChange={onChange}
            className='w-full bg-white border border-input rounded px-3 py-2 mt-1'
            required
          />
        </div>
        <div>
          <label className='block text-sm font-medium text-primary'>Number:</label>
          <input
            name='phone'
            value={formData.phone}
            onChange={onChange}
            className='w-full bg-white border border-input rounded px-3 py-2 mt-1'
            required
          />
        </div>
        <div className='flex gap-3 mt-6'>
          <button
            type='submit'
            className='flex-1 bg-primary text-white py-2 px-4 rounded hover:bg-primary/90 transition'
          >
            Submit
          </button>
          <button
            type='button'
            onClick={onClose}
            className='flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded transition'
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default SubscriptionModal;
