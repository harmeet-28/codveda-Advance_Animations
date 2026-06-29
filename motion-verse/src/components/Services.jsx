import { motion } from "framer-motion";

const services = [
  "Web Development",
  "UI/UX Design",
  "React Applications",
];

function Services() {
  return (
    <section className="services">

      <h2>Services</h2>

      <div className="service-container">

        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
            }}
            whileHover={{
              scale: 1.05,
            }}
            viewport={{ once: true }}
          >
            {service}
          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default Services;