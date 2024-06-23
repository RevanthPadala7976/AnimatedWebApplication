import { Sidebar } from "../siderbar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <div className="navbar">
      {/*Sidebar8*/}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src="/ELearn_logo.jpg" alt="E-learn Logo" width={150} />
        </motion.span>

        <div className="social">
          <a herf="#">
            <i class="fa-brands fa-square-github fa-2x"></i>
          </a>
          <a href="#">
            <i class="fa-brands fa-linkedin fa-2x"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
