import "./parallax.scss";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "400%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background: type === "services" ? "#000" : "#000",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "services" ? "What We Offer?" : "What You Receive?"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "services" ? "/public/planets.png" : "/public/sun.png"
          })`,
        }}
        className="planets"
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};

export default parallax;
