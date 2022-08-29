import React from "react";
import PropTypes from "prop-types";
import "./GrowingBackground.scss";
  
const GrowingBackground = ({customClass, text}) => {
	return (
        <div className={`growing-background ${customClass}`}>
            <span className="growing-background__text">{text}</span>
        </div>
	);
};

GrowingBackground.propTypes = {
	/** Custom styling class */
    customClass: PropTypes.string,

	/** Text */
	text: PropTypes.string,
};

GrowingBackground.defaultProps = {
	customClass: "",
	text: "",
};

export default GrowingBackground;