import React from 'react'
import {motion} from 'framer-motion';
import{SectionWrapper} from '../hoc';
import { fadeIn, textVariant } from '../utils/motion'
import { testimonials } from '../constants'
import {styles} from '../styles'

const FeedbackCard=({index, testimonial, name, designation, company, image})=>(
  <motion.div variants={fadeIn("","spring", index*0.5,0.75)}
  className="bg-[#FFFFFFD0] p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <p className="text-black font-black text-[48px]">&quot;</p>
    <div className="mt-1">
      <p className='text-black tracking-wider text-[18px]'>{testimonial}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className="text-black font-medium text-[16px]">
            <span className='blue-text-gradient'>@</span>{name}

          </p>
            <p className='mt-1 text-black text-[12px]'>
              {designation} of {company}
            </p>

        </div>
        <img src={image}
        alt={`feedback-by-${name}`}
        className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>

)
const Feedbacks = () => {
  return (
    <div className='mt-12 bg-green rounded-[20px]'>
      <div className={`${styles.padding}
      bg-[#FFFFFFD0]  min-h-[300px] rounded-[20px] `}>
      <motion.div variants={textVariant()}>
        <p className='text-[#447207] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]'>Currently Pursuing </p>
        <h2 className="font-black text-[#447207] lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">Certifications</h2>
      </motion.div>
      </div>
      <div className={`${styles.padding} -mt-20 pb-14 bg-[#1C4B06B7]  rounded-[20px] flex flex-wrap gap-7`}>
        {testimonials.map((testimonial,index)=>(
          <FeedbackCard 
          key={testimonial.name}
          index={index}
          {...testimonial}/>
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks,'feedback')