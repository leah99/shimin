import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import { TextSwapping } from '../../components';
import {ReactComponent as LinkedIn} from "../../assets/linkedIn.svg";
import {ReactComponent as Email} from "../../assets/email.svg";
import {ReactComponent as WomanWorking} from "../../assets/woman-working.svg";
import AOS from "aos";
import './Home.scss';

const Home = ({ titleGreeting, titlePronoun, titleColor, subtitle, linkedInLink, emailAddress}) => {
    useEffect(() => {
        AOS.init({duration : 800});
        AOS.refresh();
      }, [])

    return (
        <div className="home">
            <div className="home__container-left"  data-aos="fade-right" data-aos-mirror="true">
                <div className="home__container-left__title">
                    <span className="home__container-left__title__greeting">{titleGreeting}</span>
                    <div className="home__container-left__title__container">
                        <span className="home__container-left__title__container__pronoun">{titlePronoun}</span>
                        <span className="home__container-left__title__container__color"><TextSwapping text={titleColor} /></span>
                    </div>
                </div>
                <span className="home__container-left__subtitle">{subtitle}</span>
                <div className="home__container-left__icons">
                    <a href={linkedInLink}><LinkedIn className="home__container-left__icons__linkedIn" /></a>
                    <a href={emailAddress}><Email className="home__container-left__icons__email" /></a>
                </div>
            </div>
            <div className="home__container-right" data-aos="fade-left" data-aos-mirror="true"><WomanWorking /></div>
        </div>
    )
}

Home.propTypes = {
    /** Title -- greeting */
    titleGreeting: PropTypes.string,

    /** Title -- pronoun */
    titlePronoun: PropTypes.string,

    /** Title -- color */
    titleColor: PropTypes.string,

    /** Subtitle -- text under title */
    subtitle: PropTypes.string,

    /** LinkedIn link */
    linkedInLink: PropTypes.string,

    /** Email link */
    emailAddress: PropTypes.string,
}

Home.defaultProps = {
    titleGreeting: "Hello,",
    titlePronoun: "I am",
    titleColor: "Shi Min",
    subtitle: "I am a fresh graduate from Nanyang Technological University with a degree of Bachelor of Engineering (Computer Science). My specialisations are Artificial Intelligence and Cyber Security.",
    linkedInLink: "https://www.linkedin.com/in/shi-min-low-8a09591bb",
    emailAddress: "mailto:shimin.loww@gmail.com",
};

export default Home