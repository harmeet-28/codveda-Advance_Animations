import { motion } from "framer-motion";

const skills = [
  { name: "React", value: "90%" },
  { name: "JavaScript", value: "85%" },
  { name: "CSS", value: "95%" },
];

function Skills() {
  return (
    <section className="skills">

      <h2>Skills</h2>

      {skills.map((skill, index) => (
        <div key={index} className="skill">

          <h4>{skill.name}</h4>

          <div className="bar">

            <motion.div
              className="progress"
              initial={{ width: 0 }}
              whileInView={{ width: skill.value }}
              transition={{
                duration: 1.5,
              }}
              viewport={{ once: true }}
            />

          </div>

        </div>
      ))}

    </section>
  );
}

export default Skills;