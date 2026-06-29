import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      className="about"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2>About Motion Verse</h2>

      <p>
        MotionVerse is a modern React landing page built to demonstrate
        advanced animations using Framer Motion. It focuses on smooth user
        experience, responsiveness, and interactive design.
      </p>
    </motion.section>
  );
}

export default About;