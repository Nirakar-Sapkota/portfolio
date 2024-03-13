import React from "react";
import {Tilt} from 'react-tilt';
import { motion,useAnimation } from 'framer-motion';

import { styles } from '/src/styles';
import { services } from '/src/constants';
import { fadeIn, textVariant } from '/src/utils/motion';
import {SectionWrapper}  from '/src/hoc';





const Intro = () => {
    const controls = useAnimation();
    const [direction, setDirection] = React.useState(1);
  
    React.useEffect(() => {
      controls.start({
        rotate: [null, 360 * direction],
        transition: {
          duration: 1.75,
          repeat: 0,
          ease: "linear"
        }
      });
  
      setTimeout(() => {
        setDirection(-1 * direction);
      }, 9000);
    }, [direction, controls]);

  return (
    <div className="-mt-16 -mx-5 gap-10 ">
         <div> 
                <h1 className={`${styles.heroHeadText} text-white`}>
                  Hi, I am 
                </h1>
                
            </div>
        <motion.div animate={controls}>
                <span className={`${styles.heroHeadText} text-variant`}>Nirakar</span>
        </motion.div>
             
       <motion.div >

          
               
               
        <motion.p 
        variants={  {
                hidden:{opacity: 0 , x:75},
                visible:{opacity:1,x:0}
            }
        
        } 
        initial ="hidden"
        animate="visible"
            transition={{
                duration:1.75,
                repeat:0,
                repeatType:'loop'
            }}
            
          
>
        <div className="-mt-34  flex  gap-10">
            <p className={`${styles.heroSubText}  mt-15 text-[#EC9D0A]`}>
            Welcome To My Portfolio<br className='sm:block hidden'/></p>
        </div>
        </motion.p>
              
         
        </motion.div>
   

    </div>
  )
}

export default SectionWrapper(Intro,"intro");

