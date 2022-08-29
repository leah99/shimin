import React from "react";
import PropTypes from "prop-types";
import "./TextSwapping.scss";
  
const TextSwapping = ({customClass, text}) => {
	return (
        <div className={`text-swapping ${customClass}`} text-ref={text}>
            <span>{text}</span>
        </div>
	);
};

TextSwapping.propTypes = {
	/** Custom styling class */
    customClass: PropTypes.string,

	/** Text */
	text: PropTypes.string,
};

TextSwapping.defaultProps = {
	customClass: "",
	text: "",
};

export default TextSwapping;