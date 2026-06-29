import { motion } from "framer-motion";

function Footer() {

  return (

    <motion.footer

      className="footer"

      initial={{ opacity:0 }}

      whileInView={{ opacity:1 }}

      transition={{ duration:1 }}

      viewport={{ once:true }}

    >

      <p>

        © 2026 MotionVerse | Built with React & Framer Motion

      </p>

    </motion.footer>

  );

}

export default Footer;