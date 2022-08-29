import React from "react";
import PropTypes from "prop-types";
import {ReactComponent as Woman} from "../../assets/woman-wave.svg"
import { Card } from "../../components";
import "./About.scss";
  
const About = ({paragraph}) => {
	return (
        <div className="about">
            <Woman className="about__container-left" />
            <Card customClass="about__container-right" paragraph={paragraph} />
        </div>
	);
};

About.propTypes = {
	/** Paragraph */
	paragraph: PropTypes.string,
};

About.defaultProps = {
	paragraph: "Hey there! My name is Shi Min but you can call me Leah! I am currently a fresh graduate from Nanyang Technology University studying Computer Science. My interest lies with front-end but I am also open to learning some UI/UX designing. \nI love to clean and organise during my free time. My current favourite tea is ginger garden by Pryce tea. 🍵",
};

export default About;