import React from 'react'
import ThemeToggle from '../components/ThemeToggle'
import NavBar from '../components/NavBar'

const Services = () => {
  return (
    <div className='min-h-screen bg-cover bg-center backdrop-blur-sm'>
      <div className=' p-4'>
        <div className='flex flex-col gap-6'>
          <ThemeToggle />
          <NavBar />
          <h3 className="text-3xl font-bold pt-[100px]">Services</h3>
          <div className=' bg-card rounded-2xl p-55 ml-85 mr-85 shadow-2xl shadow-primary'>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
