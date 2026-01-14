
import './Timeline.css';
import { motion } from 'framer-motion';

const Timeline = () => {
  return (
    <div className="timeline">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="timeline-container left"
      >
        <div className="content">
          <h2>2020</h2>
          <p>Founded in 2020, Innoaivators emerged from a simple vision: to bridge the gap between cutting-edge technology and real-world business needs. What started as a small team of developers has grown into a full-service digital innovation agency.</p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="timeline-container right"
      >
        <div className="content">
          <h2>2021</h2>
          <p>Today, we serve clients across industries, from startups to employees, helping them leverage the power of web development, mobile apps, IoT, AI, and digital marketing to achieve their goals.</p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="timeline-container left"
      >
        <div className="content">
          <h2>2022</h2>
          <p>Our diverse team brings together expertise in software engineering, design, data science, and business strategy to deliver holistic solutions that drive measurable results.</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Timeline;
