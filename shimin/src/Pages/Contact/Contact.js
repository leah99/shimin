import React, { useEffect } from "react";
import PropTypes from "prop-types";
import {Highlight} from "../../components";
import {ReactComponent as LinkedIn} from "../../assets/linkedIn.svg";
import {ReactComponent as Email} from "../../assets/email.svg";
import AOS from "aos";
import "./Contact.scss";
  
const Contact = ({header, paragraph, linkedInLink, emailAddress}) => {
	useEffect(() => {
        AOS.init({duration : 500});
		AOS.refresh();
    }, [])

    return (
        <div className="contact" data-aos="zoom-in-down">
            <div className="contact__header"><Highlight text={header} /></div>
            <div className="contact__paragraph">
                {paragraph.split('\n').map(str => <p key={str}>{str}</p>)}
            </div>
            <div className="contact__icon">
                <a href={linkedInLink}><LinkedIn className="contact__icon__linkedIn" /></a>
                <a href={emailAddress}><Email className="contact__icon__email" /></a>
            </div>
        </div>
	);
};

Contact.propTypes = {
	/** Title */
	header: PropTypes.string,

	/** Paragraph */
	paragraph: PropTypes.string,

    /** LinkedIn link */
    linkedInLink: PropTypes.string,

    /** Email link */
    emailAddress: PropTypes.string,
};

Contact.defaultProps = {
	header: "Get In Touch",
	paragraph: "I am open to job opportunities right now.\nFeel free to contact me and I will do my best to respond!\nOr maybe just say hi?",
    linkedInLink: "https://www.linkedin.com/in/shi-min-low-8a09591bb",
    emailAddress: "mailto:shimin.loww@gmail.com",
};

export default Contact;