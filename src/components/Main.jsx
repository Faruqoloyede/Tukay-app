import React from 'react'
import { styles } from '../style'
import { stats } from '../constants'
import herologo from "../assets/herologo.png";
import Button from './Button';
import settings from "../assets/settings.png";

const Main = () => {
  return (
    <section id='home' className={`${styles.paddingY} sm:py-0`}>
      <div className='flex items-center md:flex-row flex-col justify-between '>
        <div className='flex flex-col sm:text-start text-center'>
            <h1 className={`${styles.heading2}`}>Get Your Urgent 2k</h1>
            <p className={`${styles.paragraph} max-w-[470px] text-black`}>No cash, No wahala get our application and deal with Sapa.</p>
            <div className='flex items-center gap-5 sm:justify-start justify-center my-5'>
              {stats.map((item)=>(
                <div key={item.id} className='flex items-center flex-col '>
                  <h4 className='font-space text-[20px] font-semibold'>{item.value}</h4>
                  <p>{item.title}</p>
                </div>
              ))}
            </div>
            <div className='flex items-center gap-5 sm:justify-start justify-center'>
              <Button styles="bg-primary" color= "white" />
              <div className='flex items-center gap-1'>
                <img src={settings} />
                <h4 className='font-space font-semibold text-[18px] text-primary'>How it Work</h4>
              </div>
            </div>
        </div>
        <img src={herologo} className='w-[100%] h-[100%] sm:w-[50%] sm:h-[50%]' />
      </div>
    </section>
  )
}

export default Main
