import { useState, useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";
import CanvasLoader from "./Loader"; // Import Loader for fallback

const Hero = () => {
  const [showCanvas, setShowCanvas] = useState(false); // Delay loading ComputersCanvas on mobile

  useEffect(() => {
    const timeout = setTimeout(() => setShowCanvas(true), 1000); // Delay canvas load for optimization
    return () => clearTimeout(timeout);
  }, []);

  // Typing Effect Hook
  const [text] = useTypewriter({
    words: [
      "I am a Frontend Developer.",
      "I specialize in HTML, CSS, JavaScript, React, Typescript, Next.js, and Tailwind CSS",
    ],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 10,
    delaySpeed: 1500,
  });

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Abdullah</span>
          </h1>

          {/* Typing Effect */}
          <p className={`${styles.heroSubText} !mb-4 mt-2 text-[#915EFF]`}>
            <span>{text}</span>
            <Cursor cursorColor="#915EFF" />
          </p>
        </div>
      </div>

      {/* Lazy load ComputersCanvas with a fallback */}
      {showCanvas ? (
        <Suspense fallback={<CanvasLoader />}>
          <ComputersCanvas />
        </Suspense>
      ) : null}

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
