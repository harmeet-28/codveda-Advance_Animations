import { motion } from "framer-motion";

function Contact() {

  return (

    <motion.section
      className="contact"
      initial={{ opacity:0 }}
      whileInView={{ opacity:1 }}
      transition={{ duration:1 }}
      viewport={{ once:true }}
    >

      <h2>Contact Us</h2>

      <form>

        <input
          type="text"
          placeholder="Your Name"
        />

        <input
          type="email"
          placeholder="Email"
        />

        <textarea
          placeholder="Message"
        />

        <motion.button

          whileHover={{ scale:1.1 }}

          whileTap={{ scale:0.9 }}

        >

          Send Message

        </motion.button>

      </form>

    </motion.section>

  );

}

export default Contact;