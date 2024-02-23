import React from 'react';
import {useState, useRef } from 'react';
import {motion} from 'framer-motion';
import emailjs from '@emailjs/browser';
//=======================================
import {styles} from '../styles';
import {EarthCanvas} from './canvas';
import{SectionWrapper} from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const formRef = useRef();
  const[form, setForm]= useState({
    name:'',
    email:'',
    message:'',
  })
  const [loading,setLoading]=useState(false);

  const handleChange=(e)=>{
    const {name, value}=e.target;
    setForm({...form,[name]:value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    setLoading(true);
    //template_k0d9n86
//service_boec7tn
//TwyR2nGUe6s61bBtv
    emailjs.send(
      'service_boec7tn',
      'template_k0d9n86',
      {
        from_name:form.name,
        to_name:'Nirakar',
        from_email:form.email,
        message:form.message,

      },
      'TwyR2nGUe6s61bBtv'
      )
      .then(()=>{
        setLoading(false);
        alert('Thank you for your email I will get back to you as soon as possible.');

        setForm({
          name:'',
          email:'',
          message:'',
        })
      }, (error)=>{
          setLoading(false)
          console.log(error)
          alert('Hi This is Nirakar :),Again, looks Like Something went Wrong :( Can you refresh your page please!')
      })
  }
  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div 
        variants={slideIn('left', 'tween',0.2,1)}
        className='flex-[0.75] bg-[#0D7CBD46] p-8 rounded-2xl'
      >
      <p className={styles.sectionSubText}>Get In Touch</p>
      <h3 className={styles.sectionHeadText}>Contact</h3>
      <form 
        ref={formRef}
        onSubmit={handleSubmit}
        className='mt-5 flex flex-col gap-0.5'
        >
        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>Your Name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your Name?"
            className='bg-primary py-4 px-6 placeholder:text-secondary text-white rounded-lg 
            outlined-none border-none font-medium'
          />
        </label>
        <label className='flex flex-col'>
        <span className='text-white font-medium mb-4'>Your Email</span>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your Email?"
          className='bg-primary py-4 px-6 placeholder:text-secondary text-white rounded-lg 
          outlined-none border-none font-medium'
        />
      </label>
      <label className='flex flex-col'>
      <span className='text-white font-medium mb-4'>Your Message</span>
      <textarea
        rows='7'
        
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Type your Message here!"
        className='bg-primary py-4 px-6 placeholder:text-secondary text-white rounded-lg 
        outlined-none resize-none border-none font-medium'
      />
    </label>

      <button 
        type='submit'
        className='bg-green py-3 px-8 mt-3 outline-none w-fit text-white font-bold shadow-md shadow-primary 
        rounded-xl'
      >{loading ? 'Sending...':'Send'} 
      </button>
      </form>
      </motion.div>
      <motion.div 
      variants={slideIn('right', 'tween',0.2,1)}
        className='xl:flex-1 xl:h-auto  md:h-[550px] h-[350px]'>
        <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact");
