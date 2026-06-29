import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero">

      <motion.div
        className="hero-text"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>Build Amazing Experiences</h1>

        <p>
          Modern React animations using Framer Motion.
        </p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore
        </motion.button>

      </motion.div>

      <motion.div
        className="hero-image"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      >
        🚀
      </motion.div>

    </section>
  );
}

export default Hero;