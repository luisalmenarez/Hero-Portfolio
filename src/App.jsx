import { motion } from "framer-motion";
import { Content } from "./Components/Content";
import { Header } from "./Components/Header";

export const App = () => {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-12 min-h-screen">
      <section className="lg:col-span-4 h-screen">
        <img
          src="/1.jpg"
          alt="Image Profile"
          className="w-full h-full object-cover grayscale"
        />
        <motion.span
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="absolute w-40 h-40 bg-pink-500/80 rounded-full -top-20 -left-20 shadow-md shadow-pink-500"></motion.span>
      </section>
      <section className="lg:col-span-8 relative overflow-hidden">
        <Header />
        <hr />
        <Content />
        <motion.span
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute w-40 h-40 bg-pink-500/80 rounded-full -bottom-32 -right-10"></motion.span>
        <motion.span
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.3, duration: 0.5 }}
          className="absolute w-60 h-60 bg-pink-500/80 rounded-full top-10 -right-48 shadow-2xl shadow-pink-500"></motion.span>{" "}
      </section>
    </main>
  );
};
