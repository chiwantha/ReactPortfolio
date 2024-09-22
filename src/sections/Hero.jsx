import { HERO_CONTENT } from "../constants";
import HERO_IMAGE from "../assets/Profile.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-1 md:pb-24 lg:mb-36">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-8 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Kasun Chiwantha
            </motion.h1>

            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>

            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="mt-2 max-w-xl py-6 font-light text-center lg:text-left"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.div
              variants={container(1.25)}
              initial="hidden"
              animate="visible"
              className="pt-11 mb-6 mt-2 border-t-2 border-neutral-900"
            >
              <motion.span
                variants={container(1.5)}
                initial="hidden"
                animate="visible"
                className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-xl tracking-tight text-transparent"
              >
                #K-ChordGroup #ThivMusicStudios
              </motion.span>
            </motion.div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              src={HERO_IMAGE}
              alt="Profile Photo"
              className="rounded-3xl mt-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
