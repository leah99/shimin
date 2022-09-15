import React, { useEffect } from "react";
import PropTypes from "prop-types";
import {ReactComponent as Woman} from "../../assets/woman-wave.svg";
import { Card } from "../../components";
import AOS from "aos";
import "./About.scss";
  
const About = ({customClass, paragraph}) => {
	useEffect(() => {
    	AOS.init({duration : 800});
		AOS.refresh();
    }, [])
	
	return (
        <div className={`about ${customClass}`}>
			<div className="about__container-left" data-aos="fade-right">
				<Woman className="about__container-left__woman" />
			</div>
			<div className="about__container-right" data-aos="fade-left">
				<Card paragraph={paragraph} />
			</div>
        </div>
	);
};

About.propTypes = {
	/** Custom styling class */
    customClass: PropTypes.string,

	/** Paragraph */
	paragraph: PropTypes.string,
};

About.defaultProps = {
	customClass: "",
	paragraph: "Hey there! My name is Shi Min but you can call me Leah! I am currently a fresh graduate from Nanyang Technological University studying Computer Science. My interest lies with front-end but I am also open to learning some UI/UX designing. \nI love to clean and organise during my free time. My current favourite tea is Ginger Garden by Pryce tea. 🍵",
};

export default About;