import React from 'react';
import PropTypes from 'prop-types';

import linkedInIcon from "../../assets/linkedIn.svg";
import emailIcon from "../../assets/email.svg";
import {ReactComponent as Girl} from "../../assets/girl-working.svg"

import './Home.scss';

const Home = ({ titleGreeting, titlePronoun, titleColor, subtitle, linkedInLink, linkedInIcon, emailAddress, emailIcon}) => {
    return (
        <div className="home">
            <div className="home__container-left">
                <div className="home__container-left__title">
                    <span className="home__container-left__title__greeting">{titleGreeting}</span>
                    <div className="home__container-left__title__container">
                        <span className="home__container-left__title__container__pronoun">{titlePronoun}</span>
                        <span className="home__container-left__title__container__color">{titleColor}</span>
                    </div>
                </div>
                <span className="home__container-left__subtitle">{subtitle}</span>
                <div className="home__container-left__icons">
                    <a href={linkedInLink}><img className="home__container-left__icons__linkedIn" src={linkedInIcon} alt=''/></a>
                    <a href={emailAddress}><img className="home__container-left__icons__email" src={emailIcon} alt=''/></a>
                </div>
            </div>
            <Girl className="home__container-right" />
        </div>
    )
}

Home.propTypes = {
    /** Title -- greeting */
    titleGreeting: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

    /** Title -- pronoun */
    titlePronoun: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

    /** Title -- color */
    titleColor: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

    /** Subtitle -- text under title */
    subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

    /** LinkedIn link */
    linkedInLink: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

    /** LinkedIn icon */
    linkedInIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.node, 'Photos']),

    /** Email link */
    emailAddress: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

    /** Email icon */
    emailIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.node, 'Photos']),
}

Home.defaultProps = {
    titleGreeting: "Hello,",
    titlePronoun: "I am",
    titleColor: "Shi Min",
    subtitle: "I am a fresh graduate from Nanyang Technological University with a degree of Bachelor of Engineering (Computer Science). My specialisations are Artificial Intelligence and Cyber Security.",
    linkedInLink: "https://www.linkedin.com/in/shi-min-low-8a09591bb",
    linkedInIcon: linkedInIcon,
    emailAddress: "mailto:shimin.loww@gmail.com",
    emailIcon: emailIcon,
};

export default Home