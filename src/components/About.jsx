import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../style'
import { services } from '../constants'
import { fadeIn,textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({index,title,icon}) => {
  return(
   <Tilt className='xs:w-[250px] w-full'>
      <motion.div variants={fadeIn('right','spring',0.5* index,0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
          <div
            options={{
              max:45,
              scale:1,
              speed:450
            }}
            className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
          >
              <img src={icon} alt={title}
                className='w-16 h-16 object-contain'
              />
              <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
          </div>
      </motion.div>
   </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introducion</p>
        <h1 className={styles.sectionHeadText}>Overview
        </h1>
      </motion.div>
      <motion.p variants={fadeIn('','',0.1,1)}
        className=' text-secondary text-[17px] max-w-3xl leading-[30px] '>
        I'm Abdullah, a passionate Frontend Developer who builds sleek, responsive, and high-performance web experiences using React, Next.js, and Tailwind CSS. I craft intuitive interfaces, optimize speed, and ensure seamless usability across all devices. Hiring me means getting clean, scalable code, modern design, and a website that stands out. Let’s create something amazing!
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10' style={{marginTop:'40px'}}>
          {
            services.map((service,index)=>(

                <ServiceCard key={index} index={index} title={service.title} icon={service.icon}/>
            ))
          }
         
      </div>
    </>
  )
}

export default SectionWrapper(About,"about")

