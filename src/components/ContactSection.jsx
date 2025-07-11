import React from 'react'
import { Mail, MapPin, Phone , Send} from 'lucide-react'
import { cn } from '../lib/utils'
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';



const ContactSection = () => {

    const {toast} = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault ();

        setIsSubmitting(true)

        setTimeout(() => {
            toast({
                title:'Message sent',
                description: 'Thank you for your message.I will get back to you soon.',
            });
            setIsSubmitting(false)
        },1500)
    
    }
  return (
    <section id='contact' className='py-24 px-4 relative bg-secondary/30'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
            Get in<span className='text-primary'>Touch</span>
        </h2>
        <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
            We are always available for your Healthy
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
            <div className='space-y-8'>
                <h3 className='text-2xl font font-semibold mb-6'>Contact Information</h3>
                <div className='space-y-6 justify-center'>
                    <div className='flex items-start space-x-4'>
                        <div className='p-3 rounded-full bg-primary/10'>
                            <Mail className='h-6 w-6 text-primary'/>
                        </div>
                        <div>
                            <h4 className='font-medium'>Email</h4>
                            <a
                                href=''
                                className='text-muted-foreground hover:text-primary transition-colors'
                            >
                            inquires@vita-shield.com  
                            </a>
                        </div>
                    </div>
                </div>
                <div className='space-y-6 justify-center'>
                    <div className='flex items-start space-x-4'>
                        <div className='p-3 rounded-full bg-primary/10'>
                            <Phone className='h-6 w-6 text-primary'/>
                        </div>
                        <div>
                            <h4 className='font-medium'>Phone</h4>
                            <a
                                href='tel: '
                                className='text-muted-foreground hover:text-primary transition-colors'
                            >
                             (+254) 075555555 
                            </a>
                        </div>
                    </div>
                </div>
                <div className='space-y-6 justify-center'>
                    <div className='flex items-start space-x-4'>
                        <div className='p-3 rounded-full bg-primary/10'>
                            <MapPin className='h-6 w-6 text-primary'/>
                        </div>
                        <div>
                            <h4 className='font-medium'>Location</h4>
                            <a
                                className='text-muted-foreground hover:text-primary transition-colors'
                            >
                               Nairobi, Rongai
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-card p-8 rounded-lg shadow-xs' >
                <h3 className='text-2xl font-semibold mb-6'>Send a Message</h3>
                <form className='space-y-6' onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='name' className='block text-sm font-medium mb-2 text-left'>Name :</label>
                        <input 
                            type='text' 
                            id='name' 
                            name='name' 
                            required
                            className='w-full px-4 py-3 rounded-md border border-input text-black bg-white focus-outline-hidden focus:ring-2 focus:ring-primary'
                            
                        />
                    </div>
                    <div>
                        <label htmlFor='email' className='block text-sm font-medium mb-2 text-left'>Email :</label>
                        <input 
                            type='email' 
                            id='email' 
                            name='email' 
                            required
                            className='w-full px-4 py-3 rounded-md border border-input text-black bg-white focus-outline-hidden focus:ring-2 focus:ring-primary'
                            placeholder='....@gmail.com'
                        />
                    </div>
                    <div>
                        <label htmlFor='message'className='block text-sm font-medium mb-2 text-left'>Message :</label>
                        <textarea 
                            id='message' 
                            name='message' 
                            required
                            className='w-full px-4 py-3 rounded-md border border-input text-black bg-white focus-outline-hidden focus:ring-2 focus:ring-primary resize-none'
                            placeholder="Hello, I'd like to talk about..."
                        />
                        <button disabled={isSubmitting} type='submit' className={cn(
                            'cosmic-button w-full flex items-center justify-center gap-1 mt-2 '
                            )}
                            >
                                {isSubmitting ?'Sending':'Send Message'} 
                                <Send size={16}/>
                        </button>
                    </div>   
                </form>
            </div>
        </div>
    </section>
  )
}

export default ContactSection
