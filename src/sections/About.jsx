import ABOUT_IMAGE from "../assets/AboutProfile.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="border-b border-neutral-900 pb-1">
      <motion.h2
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="my-16 text-center text-4xl"
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -200 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img
              src={ABOUT_IMAGE}
              alt="About Image"
              className="rounded-3xl mb-6"
              width={500}
            />
          </div>
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 200 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 text-center lg:text-left">
              {ABOUT_TEXT}
            </p>
          </div>
          <div className="border-t-2 border-neutral-900 flex justify-center lg:justify-start">
            <h3 className="mt-2 pt-3 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent">
              #ProCoder #Linkding #ReactJs #NextJs #VisualC#
            </h3>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
