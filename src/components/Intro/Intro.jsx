import React, {useContext} from "react";
import "./intro.css";
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import {themeContext} from "../../Context";
import {motion} from "framer-motion";
import {Link} from "react-scroll";

const Intro = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const transition = {duration: "2", type: "spring"};
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{color: darkMode ? "white" : ""}}>Hello, I am </span>
          <span>Naunihal Dhillon</span>
          <span style={{color: darkMode ? "white" : ""}}>
            Frontend Developer with high level of experience in web designing
            and development, producing the Quality work
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        <div className="i-icons">
          <img src={Github} alt="" />
          <img src={Linkedin} alt="" />
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <motion.img
          initial={{left: "-36%"}}
          whileInView={{left: "-24%"}}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{top: "-4%", left: "74%"}}
          whileInView={{left: "68%"}}
          transition={transition}
          style={{top: "-4%", left: "68%"}}
          className="floating-div1"
        >
          <FloatingDiv image={crown} text1="Web" text2="Developer" />
        </motion.div>
        <motion.div
          initial={{left: "9rem", top: "18rem"}}
          whileInView={{left: "0rem"}}
          transition={transition}
          style={{top: "18rem", left: "0rem"}}
          className="floating-div"
        >
          <FloatingDiv image={thumbup} text1="Web" text2="Designer" />
        </motion.div>
        {/*Blur div */}
        <div
          className="blur"
          style={{backgroundColor: "rgb(238 210 255)"}}
        ></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
