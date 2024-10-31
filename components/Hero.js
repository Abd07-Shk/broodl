import React from 'react'
import { Fugaz_One } from 'next/font/google';
import Button from './Button';
import Calendar from './Calendar';
import Link from 'next/link';
import CallToAction from './CallToAction';
const fugaz = Fugaz_One({ subsets: ['latin'], weight: ['400'] });

export default function Hero() {
  return (
    <div className='py-4 md:py-10 flex flex-col gap-8 sm:gap-10 ' >
    <h1 className={'text-5xl sm:text-text-6xl md:text-7xl text-centre ' + fugaz.className}>
      <span className='textGradient'>Broodl </span>helps you track your <span className='textGradient'>
        daily </span>Mood!</h1>
        <p className='text-lg sm:text-xl md:text-2xl text-center 2-full mx-auto max-w-[600px] '>Create your mood record and see how you feel on 
        <span className='font-semibold'> every day of the Year</span> </p>
        <div className='grid grid-cols-2 gap-4 w-fit mx-auto'>
          <Link href={'/dashboard'}>
           <Button text ="Sign up"/>
          </Link>
          <Link href={'/dashboard'}>
           <Button text ="Login" dark/>
          </Link>

        </div>
        <CallToAction/>  
        <Calendar demo/> 
    </div>
    
  )
}