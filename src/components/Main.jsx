import React from 'react'
import { styles } from '../style'
import { stats } from '../constants'
import herologo from "../assets/herologo.png";

const Main = () => {
  return (
    <section id='home'>
      <div className='flex items-center md:flex-row flex-col justify-between '>
        <div className='flex flex-col sm:text-start text-center'>
            <h1 className={`${styles.heading2}`}>Get Your Urgent 2k</h1>
            <p className={`${styles.paragraph} max-w-[470px] text-black`}>No cash, No wahala get our application and deal with Sapa.</p>
            <div className='flex items-center gap-5'>
              {stats.map((item)=>(
                <div key={item.id} className='flex items-center flex-col mt-4'>
                  <h4 className='font-space text-[20px] font-semibold'>{item.value}</h4>
                  <p>{item.title}</p>
                </div>
              ))}
            </div>
        </div>
        <img src={herologo} className='w-[50%] h-[50%]' />
      </div>
    </section>
  )
}

export default Main
