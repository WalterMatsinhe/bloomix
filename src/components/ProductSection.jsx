import React from 'react'
import { BellRing } from 'lucide-react'
const ProductSection = () => {
  return (
    <section id = 'product' className='py-24 px-4 relative'>
            {''}
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-space text-3xl md:text-4xl font-bold mb-12 text-center'>
                    Our<span className='text-primary'> Product</span>
                </h2>

                <div className='flex flex-wrap justify-center '>
                  <div className='bg-card  h-96 relative  rounded-lg shadow-xs card-hover'>
                    <img src='/juices.png' alt='juices' className='w-full h-full object-cover rounded-lg border-4'  />
                  </div>
                  <button className='subscribe-button text-white text-xl '>
                    Subcribe<span><BellRing className='ml-3' /></span>
                  </button>
                </div>
            </div>
    </section>
  )
}

export default ProductSection
