import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textMotion = {
    scale: 1.05,
    y: -5,
    transition: { duration: 0.25 },
  };

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5`}
    >
      <div className='w-full flex justify-between items-center max-w-8xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-black text-[18px] cursor-pointer flex '>
            YANG &nbsp;
            <span className='lg:block hidden'> | MSc in Information Systems UCD Dublin</span>
          </p>
        </Link>

        <ul className='list-none flex flex-row gap-10 items-center'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-primary" : "text-black"
              } hover:text-primary text-[18px] cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>
                <motion.div whileHover={textMotion}>{nav.title}</motion.div>
              </a>
            </li>
          ))}
          <li className='text-black hover:text-primary text-[18px] hidden sm:inline'>
            <a href='mailto:yinfangrtz@gmail.com'>
              <motion.div whileHover={textMotion}>yinfangrtz@gmail.com</motion.div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;




{/* 
common hover effects

<motion.div whileHover={{ scale: 1.1 }}>
  Hover me
</motion.div>

<motion.div whileHover={{ opacity: 0.7 }}>
  Hover me
</motion.div>

<motion.div whileHover={{ color: "blue" }}>
  Hover me
</motion.div>

<motion.div whileHover={{ backgroundColor: "lightgray" }}>
  Hover me
</motion.div>

<motion.div whileHover={{ border: "2px solid blue" }}>
  Hover me
</motion.div>

<motion.div whileHover={{ translate3d: "0px, -5px, 0px", scale: 1.1 }}>
  Hover me
</motion.div>

<motion.div whileHover={{ rotate: 10, scale: 1.1 }}>
  Hover me
</motion.div>

<motion.div whileHover={{ scale: 1.1, y: -5 }} transition={{ duration: 0.2 }}>
  Hover me
</motion.div>

<motion.div whileHover={{ y: -10 }}>
  Hover me
</motion.div>

<motion.div
  whileHover={{ scale: 1.1, rotate: 10, color: "blue" }}
  transition={{ duration: 0.2 }}
>
  Hover me
</motion.div> 

*/}



