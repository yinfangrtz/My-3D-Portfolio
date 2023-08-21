import { motion } from "framer-motion";

import { styles } from "../styles";
import { DoughnutCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[60px]  max-w-8xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div>
          <h1 className={`${styles.heroHeadText} text-black`}>
            YANG YINFANG 
          </h1>
          <h1 className={`${styles.heroHeadText} text-black mb-10`}>
            FRONT END DEVELOPER
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-black-100 max-w-[70%]`}>
            Make a meaningful impact on digital experiences. Based in Dublin.
          </p>
        </div>
      </div>

      <DoughnutCanvas />

      <div className='absolute xs:bottom-24 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-black flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-black mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
