import React from 'react';
import PropTypes from 'prop-types';

import './Paragraph.scss';

const Paragraph = ({ customClass, paragraph, coloredText}) => {
    return (
        <div className={`paragraph ${customClass}`}>
            {paragraph.map((value, idx) => {
                return <p key={idx}>
                    {value.toString().split(coloredText).reduce((prev, current, i) => {
                        if(!i) {
                            return [current]
                        }
                        return prev.concat(<span className="paragraph--color" key={coloredText + current}>{coloredText}</span>, current)
                    }, [])}
                </p>
            })}
        </div>
    )
}

Paragraph.propTypes = {
    /** Custom paragraph class */
    customClass: PropTypes.string,

    /** Description */
    paragraph: PropTypes.arrayOf(PropTypes.string),

    /** Text with different color */
    coloredText: PropTypes.string,
}

Paragraph.defaultProps = {
    customClass: "",
    paragraph: "",
    coloredText: "",
};

/** Example usage of Paragraph */
{/* <Paragraph
    customClass=""
    paragraph={["Hey there! My name is Shi Min but you can call me Leah! I am currently a fresh graduate from Nanyang Technology University studying Computer Science. My interest lies with front-end but I am also open to learning some UI/UX designing.", 
                "I love to clean and organise during my free time. My current favourite tea is ginger garden by Pryce tea."]}
    coloredText="Leah"
/> */}

export default Paragraph