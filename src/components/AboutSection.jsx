import { Activity, HeartPulse } from 'lucide-react'
import React from 'react'

const AboutSection = () => {
  return (
    <section id='about' className='py-24 px-4 relative'>
        {''}
        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-space text-3xl md:text-4xl font-bold mb-12 text-center'>
                About<span className='text-primary'> us</span>
            </h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            <div className='space-y-6'>
                <h3 className='text-2xl font-semibold'>At Boomix, we’re more than just a juice — we’re a mission.</h3>
                <p className='text-muted-foreground '>
                   Vitashield is a wellness-driven brand, that provides 100%Organic plant based nutritional supplements formulated for 
                   middle aged adults. The goal is to help this demographic strengthen their immune system, combat age-related nutritional 
                   deficiencies and improve overall vitality naturally. We also offer personalized nutritional consultations and educational
                    wellness content to empower healthier lifestyles through nature.
                </p>
                <p className='text-muted-foreground'>
                    Our supplements are made from real fruits, vegetables, and herbs, with no artificial additives, 
                    preservatives, or processed ingredients. Every bottle is packed with bioavailable nutrients that the body can recognize, 
                    absorb, and use — supporting immunity, energy, and overall vitality without compromise.

                    We’re here to empower seniors with a simple, delicious solution to stay healthy, strong, and informed — because wellness shouldn't be complicated or synthetic.
                </p>
                <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
                    <a className='cosmic-button' href='#contact'>
                        Order
                    </a>
                </div>
            </div>

            <div className='grid grid-cols-1 gap-6'>
                <div className='gradient-border p-6 card-hover'>
                    <div className='flex items-start gap-4'>
                        <div className='p-3 rounded-full bg-primary/10'>
                        <HeartPulse className='h-6 w-6 text-primary'/>
                        </div>
                        <div className='text-left'>
                            <h4 className='font-semibold'> Natural  anti-inflammatory and antioxidant.</h4>
                        </div>
                    </div>
                </div>
                <div className='gradient-border p-6 card-hover'>
                    <div className='flex items-start gap-4'>
                        <div className='p-3 rounded-full bg-primary/10'>
                        <Activity className='h-6 w-6 text-primary'/>
                        </div>
                        <div className='text-left'>
                            <h4 className='font-semibold'>Rich in vitamins A, C, and E — key to immunity</h4>
                        </div>
                    </div>
                </div>
                <div className='gradient-border p-6 card-hover'>
                    <div className='flex items-start gap-4'>
                        <div className='p-3 rounded-full bg-primary/10'>
                        <HeartPulse className='h-6 w-6 text-primary'/>
                        </div>
                        <div className='text-left'>
                            <h4 className='font-semibold'>Antiviral and antibacterial properties</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default AboutSection
