import React from "react";
import PropTypes from "prop-types";
import "./Highlight.scss";
  
const Highlight = ({customClass, text}) => {
	return (
        <div className={`highlight ${customClass}`}>
            <span>{text}</span>
        </div>
	);
};

Highlight.propTypes = {
	/** Custom styling class */
    customClass: PropTypes.string,

	/** Text */
	text: PropTypes.string,
};

Highlight.defaultProps = {
	customClass: "",
	text: "",
};

export default Highlight;