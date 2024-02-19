import React from "react";
import {Tilt} from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import {SectionWrapper}  from '../hoc';

const ServiceCard =({index, title, icon})=>(



    <Tilt className='xs:w-[250px] w-full'>
      <motion.div 
        variants={fadeIn('right','spring',0.5*index ,0.75)}//side, type delays
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

        <img src={icon} alt={title} 
        className='w-16 h-16 object-contain'/>
        <h3  className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>


      </motion.div>
    </Tilt>
  )

// ServiceCard.propTypes={
//   index:PropTypes.integer,
//   title:PropTypes.string,
//   icon:PropTypes.icon
// }

const About = () => {

  return (
    <div className="-mt-15">
    <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}> Introduction</p>
    <h2 className={styles.sectionHeadText}>Overview</h2>
    </motion.div>
    
    <motion.p
      variants={fadeIn('','',0.1,1)}
    >
      I am an IT Graduate from Victoria University with more than four years of customer service experience with High level of Technical Skills to meet your organisational standards.
    </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index)=>{
          return (
            <ServiceCard  key={service.title} index={index} {...service}/>
            )
        })}
      </div>

    </div>
  )
}

export default SectionWrapper(About,"about");

// import React from "react";

// function About(){
//   return(<div>aa</div>)
// }
// export default About;
