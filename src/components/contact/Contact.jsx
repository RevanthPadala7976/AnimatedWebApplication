import "./contact.scss";
import { useRef, useState } from "react";
import { animate, motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_gvomp6f", "template_j21fd7r", formRef.current, {
        publicKey: "iNX3elikAgsxKLxjU",
      })
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="contact"
      ref={ref}
      variants={variants}
      initial="initial"
      whileInView={isInView ? "animate" : "initial"}
    >
      <motion.div className="textContainer">
        <motion.h1 variants={variants}>Have Some Question?</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>hello@ELearn.edu</span>
        </motion.div>
        <motion.div className="item">
          <h2>Address</h2>
          <span>San Francisco, CA</span>
        </motion.div>
        <motion.div className="item">
          <h2>Phone</h2>
          <span>+1 2341234567</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.form ref={formRef} onSubmit={sendEmail}>
          <input type="text" required placeholder="Name" name="name" />
          <input
            type="email"
            required
            placeholder="Enter your Email"
            name="email"
          />
          <textarea rows={8} placeholder="Message" name="message" />
          <motion.button
            whileHover={{
              backgroundColor: "#40A2D8",
              color: "white",
              border: "none",
              scale: 1.1,
              transition: {
                duration: 1,
                type: "spring",
                stiffness: 200,
              },
            }}
          >
            Send
          </motion.button>
          {error && "Error"}
          {success && "Success!"}
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
