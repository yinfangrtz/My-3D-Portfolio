import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";

const Footer = () => {
  const textMotion = {
    scale: 1.05,
    y: -5,
    transition: { duration: 0.25 },
  };

  return (
    <>
     {/* First Part */}
     <section className="relative w-full mx-auto">
        <div className={`max-w-8xl mx-auto ${styles.paddingX} pt-10 flex flex-col items-center lg:flex-row lg:items-start gap-5`}>
          <div className="lg:text-left text-center"> 
            <h1 className={`${styles.heroHeadText} text-black`}>YANG YINFANG</h1>
            <h1 className={`${styles.heroHeadText} text-black mb-10`}>FRONT END DEVELOPER</h1>
          </div>
        </div>
      </section>

      {/* Second Part: Social Media Links */}
      <div className={`py-10 ${styles.paddingX} text-[18px] max-w-8xl`}>
        {/* Larger screen (lg) */}
        <div className="hidden lg:flex justify-between items-center mx-auto">
          <div className="flex space-x-6">
            <motion.a href="https://www.linkedin.com/in/yinfangyang/" target="_blank" className='text-black hover:text-primary' whileHover={textMotion}>LinkedIn</motion.a>
            <motion.a href="https://github.com/yinfangrtz" target="_blank" className='text-black hover:text-primary' whileHover={textMotion}>GitHub</motion.a>
            <motion.a href="https://www.behance.net/RheaYang" target="_blank" className='text-black hover:text-primary' whileHover={textMotion}>Behance</motion.a>
          </div>
          <motion.a href="#" className='text-black hover:text-primary' whileHover={textMotion}>Back to top ↑</motion.a>
          <div>
            <motion.p className="text-black" whileHover={textMotion}>Copyright © YANGYINFANG</motion.p>
          </div>
        </div>
        
        {/* Smaller screen */}
        <div className="lg:hidden text-center">
          <div className="">
            <motion.a href="https://www.linkedin.com/in/yinfangyang/" target="_blank" className='text-black hover:text-primary text-[18px] block' whileHover={textMotion}>LinkedIn</motion.a>
            <motion.a href="https://github.com/yinfangrtz" target="_blank" className='text-black hover:text-primary text-[18px] block' whileHover={textMotion}>GitHub</motion.a>
            <motion.a href="https://www.behance.net/RheaYang" target="_blank" className='text-black hover:text-primary text-[18px] block' whileHover={textMotion}>Behance</motion.a>
          </div>
          <div className="">
            <motion.a href="#" className='text-black hover:text-primary text-[18px]' whileHover={textMotion}>Back to top ↑</motion.a>
          </div>
          <div>
            <motion.p className="text-black text-[18px]" whileHover={textMotion}>Copyright © YANGYINFANG. All rights reserved.</motion.p>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Footer;
