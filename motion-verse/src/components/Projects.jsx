import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    desc: "Modern responsive portfolio built using React."
  },
  {
    title: "Task Manager",
    desc: "Animated task management application."
  },
  {
    title: "E-Commerce UI",
    desc: "Shopping interface with beautiful animations."
  }
];

function Projects() {
  return (
    <section className="projects">

      <h2>Projects</h2>

      <div className="project-container">

        {projects.map((project, index) => (

          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity:0, scale:0.8 }}
            whileInView={{ opacity:1, scale:1 }}
            transition={{
              duration:0.6,
              delay:index*0.2
            }}
            whileHover={{
              y:-10,
              scale:1.05
            }}
            viewport={{ once:true }}
          >

            <h3>{project.title}</h3>

            <p>{project.desc}</p>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Projects;