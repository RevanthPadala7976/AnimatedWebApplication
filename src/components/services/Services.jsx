import "./services.scss";
import { useRef } from "react";
import { animate, motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
    transition: { duration: 2 },
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services ser"
      variants={variants}
      initial="initial"
      // whileInView={"animate"}
      ref={ref}
      animate={isInView ? "animate" : "initial"}
    >
      <motion.div className="textContainer">
        <p>
          Learn trending technologies to achieve <br />
          your dream job
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="people" />
          <h1>
            <b>Enhance </b> Your Skills
          </h1>
        </div>
        <div className="title">
          <h1>
            <b>for Future </b> Success
          </h1>
          <motion.button
            whileHover={{
              backgroundColor: "#102C57",
              color: "white",
              scale: 1.1,
              transition: {
                duration: 1,
                type: "spring",
                stiffness: 200,
              },
            }}
          >
            Subscribe
          </motion.button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{
            backgroundColor: "#40A2D8",
            scale: 1.1,
            transition: {
              duration: 1,
              type: "spring",
              stiffness: 200,
            },
          }}
        >
          <h2>Silver</h2>
          <p>
            As a Silver subscriber, enjoy unlimited access to introductory and
            intermediate courses, engage in community forums, and participate in
            monthly expert webinars. Receive digital certificates for course
            completions and track your progress with basic learning analytics
          </p>
          <motion.button
            whileHover={{
              backgroundColor: "#050C9C",
              color: "white",
              scale: 1.1,
              transition: {
                duration: 1,
                type: "spring",
                stiffness: 200,
              },
            }}
          >
            Buy
          </motion.button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{
            backgroundColor: "#40A2D8",
            scale: 1.1,
            transition: {
              duration: 1,
              type: "spring",
              stiffness: 200,
            },
          }}
        >
          <h2>Gold</h2>
          <p>
            Gold subscribers get all Silver benefits, plus access to advanced
            courses, priority community support, and bi-weekly webinars. Enjoy
            offline access, enhanced certificates, personalized course
            recommendations, and interactive quizzes for a richer learning
            experience
          </p>
          <motion.button
            whileHover={{
              backgroundColor: "#050C9C",
              color: "white",
              scale: 1.1,
              transition: {
                duration: 1,
                type: "spring",
                stiffness: 200,
              },
            }}
          >
            Buy
          </motion.button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{
            backgroundColor: "#40A2D8",
            scale: 1.1,
            transition: {
              duration: 1,
              type: "spring",
              stiffness: 200,
            },
          }}
        >
          <h2>Platinum</h2>
          <p>
            Platinum subscribers receive all Gold benefits, along with unlimited
            course access, 1-on-1 mentorship, exclusive content, and advanced
            learning analytics. Benefit from career services, priority support,
            exclusive webinars, early course access, and tools to create and
            share your own courses
          </p>
          <motion.button
            whileHover={{
              backgroundColor: "#050C9C",
              color: "white",
              scale: 1.1,
              transition: {
                duration: 1,
                type: "spring",
                stiffness: 200,
              },
            }}
          >
            Buy
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
