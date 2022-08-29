import React from "react";
import PropTypes from "prop-types";
import "./BounceEffectLink.scss";
  
const BounceEffectLink = ({customClass, link, linkTitle}) => {
	return (
        <div className={`bounce-effect-link ${customClass}`}>
            <a className="bounce-effect-link__link" href={link}>{linkTitle}</a>
        </div>
	);
};

BounceEffectLink.propTypes = {
	/** Custom styling class */
    customClass: PropTypes.string,

    /** Link */
    link: PropTypes.string,

    /** Title embedded with link */
    linkTitle: PropTypes.string,
};

BounceEffectLink.defaultProps = {
	customClass: "",
	link: "",
    linkTitle: "",
};

export default BounceEffectLink;