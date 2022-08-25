import React, {useContext} from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from "./Resume-naunihal.pdf";
import {themeContext} from "../../Context";
import {motion} from "framer-motion";

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services">
      {/* Left Side */}
      <div className="awesome">
        <span style={{color: darkMode ? "white" : ""}}>My Awesome</span>
        <span>Services</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br /> voluptates tempora voluptatem ipsam pariatur
          <br /> Tenetur earum ipsam sed esse, incidunt nisi
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div
          className="blur s-blur1"
          style={{backgroundColor: "#121d30"}}
        ></div>
      </div>

      {/* Right Side */}
      <div className="cards">
        <motion.div
          initial={{left: "25rem"}}
          whileInView={{left: "20rem"}}
          transition={transition}
          style={{left: "20rem"}}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            details={"Figma, Sketch, Photoshop, Adobe"}
          />
        </motion.div>

        {/* Second Card */}

        <motion.div
          initial={{left: "-1rem", top: "12rem"}}
          whileInView={{left: "3rem"}}
          transition={transition}
          style={{top: "12rem"}}
        >
          <Card
            emoji={Glasses}
            heading={"Developer"}
            details={"HTML, Css, Javascript, React"}
          />
        </motion.div>
        {/* Third Card */}

        <motion.div
          initial={{top: "19rem", left: "25rem"}}
          whileInView={{left: "20rem"}}
          transition={transition}
          style={{top: "19rem", left: "17rem"}}
        >
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            details={"lorem ipsum dolor sit amet consectetur adipisicing elit"}
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{background: "var(--purple)"}}
        ></div>
      </div>
    </div>
  );
};

export default Services;
