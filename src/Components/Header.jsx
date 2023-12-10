import { motion } from "framer-motion";

export const Header = () => {
  return (
    <header className="container mx-auto">
      <ul className="flex flex-col sm:flex-row gap-14 sm:gap-8 p-5">
        <motion.li
          initial={{ opacity: 0, x: 50 }}
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}>
          <a
            href="/"
            className="text-pink-500 pb-5 border-b-2 border-pink-500 font-medium">
            About
          </a>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: 50 }}
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}>
          <a
            href="/"
            className="pb-5 border-b-2 border-transparent font-medium hover:border-pink-500 hover:text-pink-500 transition-all duration-300">
            How to works
          </a>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: 50 }}
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}>
          <a
            href="/"
            className="pb-5 border-b-2 border-transparent font-medium hover:border-pink-500 hover:text-pink-500 transition-all duration-300">
            Get a developer
          </a>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: 50 }}
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}>
          <a
            href="/"
            className="py-2 px-4 border rounded-full font-medium hover:bg-pink-500 hover:text-white transition-all duration-300">
            Login
          </a>
        </motion.li>
      </ul>
    </header>
  );
};
