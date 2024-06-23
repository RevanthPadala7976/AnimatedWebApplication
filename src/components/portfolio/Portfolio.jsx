import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Deep Learning",
    img: "./public/deeplearning.jpg",
    desc: "This course, created by Andrew Ng, dives deep into neural networks, their architectures, and how they are used in various applications. It covers topics from basic neural networks to advanced deep learning techniques.",
  },
  {
    id: 2,
    title: "Neural Networks",
    img: "./public/neuralnetwork.jpg",
    desc: "This course delves into probabilistic graphical models, which are essential for representing and reasoning with uncertainties in AI. The course covers both theoretical foundations and practical implementations.",
  },
  {
    id: 3,
    title: "Advance Machine Learning",
    img: "./public/machinelearning.jpg",
    desc: "Offered by the National Research University Higher School of Economics, this course covers a wide range of machine learning techniques, including advanced topics like reinforcement learning, computer vision, and Bayesian methods.",
  },
  {
    id: 4,
    title: "Artificial Intelligence",
    img: "./public/ai.jpg",
    desc: "This course focuses on the application of AI in robotics. It covers probabilistic robotics, planning, search algorithms, and decision-making under uncertainty.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["end end", "start start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <motion.button
              whileHover={{
                backgroundColor: "#40A2D8",
                color: "white",
                scale: 1.1,
                transition: {
                  duration: 1,
                  type: "spring",
                  stiffness: 200,
                },
              }}
            >
              Enroll
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="protfolio">
      <div className="progress">
        <h1>Featured Cources</h1>
        <motion.div className="progressBar" style={{ scaleX }}></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
