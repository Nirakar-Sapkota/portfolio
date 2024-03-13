import React from 'react'
import {motion} from 'framer-motion';
import{styles} from '../styles'
import { ComputersCanvas } from './canvas';
import { fadeIn, textVariant } from '../utils/motion';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import Welcome from './canvas/Welcome';
const Hero = () => {
  return (
    <section className ="relative w-auto h-screen mx-auto">
    <div className={`${styles.paddingX} absolute inset-10 top-[120px] 
      max-w-7x1 mx-120 flex flex-row items-start gap-3`}>
      <div className='flex flex-col justify-center items-center mt-5'>
      <div className='w-5 h-5 rounded-full bg-[#F39F02]'/>
      <div className='w-1 sm:h-80 h-40 green-gradient'/>
      </div>
      <div>
       
             <Welcome/>
                { /* <motion.div variants={textVariant()}>
                      <h1 className={`${styles.heroHeadText} text-white`}>
                      Hı, I am <span className='text-[#2AC906]'>Nirakar</span>
                    </h1>
                    <p className={`${styles.heroSubText} mt-2 text-[#EC9D0A]`}>
                    Welcome To My Portfolio<br className='sm:block hidden'/></p>
                      <VerticalTimeline/>
                  
                  </motion.div> */}
          


          { /*  <motion.div 
             variants={fadeIn('right','spring',0.5 ,0.75)}//side, type delays
             className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
                  > 
             <div options={{
               max:45,
               scale:1,
               speed:550
             }}

             className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] 
             flex justify-evenly items-center flex-col"
             >
         
         
             </div>
         
         
            </motion.div> */}
           
      </div>
      

    </div>
   

   <ComputersCanvas  />

    <div className=' absolute xs:bottom-8 bottom-2
    w-full flex justify-center items-center'>
      <a href='#about'>
      <div className='w-[35px] h-[70px]  rounded-3xl border-4 border-green
      flex justify-center items-start p-2 m-2 ' >
      <motion.div
        animate={{
          y:[5,24,0]
        }}
        transition={{
          duration:1.5,
          repeat:Infinity,
          repeatType:'loop'
        }}
        className='w-3 h-3 rounded-full bg-green  mb-0'
      
      />
      </div>
      </a>
    
    </div>
    </section>
  )
}

export default Hero;