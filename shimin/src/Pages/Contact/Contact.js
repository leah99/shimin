import React from "react";
import PropTypes from "prop-types";
import {Highlight} from "../../components"
import {ReactComponent as LinkedIn} from "../../assets/linkedIn.svg"
import {ReactComponent as Email} from "../../assets/email.svg"
import linkedInIcon from "../../assets/linkedIn.svg";
import emailIcon from "../../assets/email.svg";

import "./Contact.scss";
  
const Contact = ({header, paragraph, linkedInLink, linkedInIcon, emailAddress, emailIcon}) => {
	return (
        <div className="contact">
            <div className="contact__header"><Highlight text={header} /></div>
            <div className="contact__paragraph">
                {paragraph.split('\n').map(str => <p key={str}>{str}</p>)}
            </div>
            <div className="contact__icon">
                {/* <a href={linkedInLink}><img className="contact__icon__linkedIn" src={linkedInIcon} alt=''/></a>
                <a href={emailAddress}><img className="contact__icon__email" src={emailIcon} alt=''/></a> */}
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

    /** LinkedIn icon */
    linkedInIcon: PropTypes.node,

    /** Email link */
    emailAddress: PropTypes.string,

    /** Email icon */
    emailIcon: PropTypes.node,
};

Contact.defaultProps = {
	header: "Get In Touch",
	paragraph: "I am open to job opportunities right now.\nFeel free to contact me and I will do my best to respond!\nOr maybe just say hi?",
    linkedInLink: "https://www.linkedin.com/in/shi-min-low-8a09591bb",
    linkedInIcon: linkedInIcon,
    emailAddress: "mailto:shimin.loww@gmail.com",
    emailIcon: emailIcon,
};

export default Contact;