import "./hero.scss";
import { motion, useInView } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 50,
    transition: {
      duration: 5,
      repeat: Infinity,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          whileInView="animate"
        >
          <motion.h2 variants={textVariants}>ONLINE</motion.h2>
          <motion.h1 variants={textVariants}>
            Platform For Digital Learning
          </motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button
              variants={textVariants}
              whileHover={{
                backgroundColor: "#301E67",
                color: "white",
                scale: 1.1,
                transition: {
                  duration: 1,
                  type: "spring",
                  stiffness: 200,
                },
              }}
              whileTap={{ scale: 0.95 }}
            >
              See the Latest Works
            </motion.button>
            <motion.button
              variants={textVariants}
              whileHover={{
                backgroundColor: "#301E67",
                color: "white",
                scale: 1.1,
                transition: {
                  duration: 1,
                  type: "spring",
                  stiffness: 200,
                },
              }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.button>
          </motion.div>
          <motion.i
            variants={textVariants}
            class="fa-solid fa-angles-down fa-2x"
            animate="scrollButton"
          ></motion.i>
        </motion.div>
        <div className="imageContainer">
          <img
            src="/Online learning-bro.png"
            alt="profile picture"
            width={400}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Hero;
