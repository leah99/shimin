import React from "react";
import PropTypes from "prop-types";
import "./Card.scss";
  
const Card = ({customClass, paragraph}) => {
	return (
        <div className={`card ${customClass}`} text-ref={paragraph}>
            {paragraph}
        </div>
	);
};

Card.propTypes = {
    /** Custom styling class */
    customClass: PropTypes.string,

	/** Paragraph */
	paragraph: PropTypes.string,
};

Card.defaultProps = {
    customClass: "",
	paragraph: "",
};

export default Card;