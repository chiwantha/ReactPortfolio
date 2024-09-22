import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        className="border-b border-neutral-900 pb-20"
      >
        <h2 className="my-10 text-center text-4xl">Get In Touch</h2>
        <div className="text-center tracking-tighter">
          <p className="my-4">{CONTACT.address}</p>
          <p className="my-4">{CONTACT.phoneNo}</p>
          <a href="/" className="border-b">
            {CONTACT.email}
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
