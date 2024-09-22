import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-1">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div className="">
        {PROJECTS.map((project, index) => (
          <div className="mb-8 flex flex-wrap lg:justify-center" key={index}>
            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: -200, opacity: 0 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <img
                width={150}
                height={150}
                src={project.image}
                alt={project.title}
                className="mb-6 rounded-3xl"
              />
            </motion.div>
            <div className="w-full max-w-xl lg:w-3/4">
              <motion.h6
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: 200, opacity: 0 }}
                transition={{ duration: 1 }}
                className="mb-2 font-semibold text-xl"
              >
                {project.title}
              </motion.h6>
              <motion.p
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: 200, opacity: 0 }}
                transition={{ duration: 1 }}
                className="mb-4 text-neutral-400"
              >
                {project.description}
              </motion.p>
              <motion.div
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: 200, opacity: 0 }}
                transition={{ duration: 1 }}
                ao
                className=""
              >
                {project.technologies.map((texhnology, index) => (
                  <span
                    key={index}
                    className="mr-2 mt-4 rounded bg-green-900 text-neutral-400 px-2 py-1 text-sm font-md"
                  >
                    {texhnology}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
