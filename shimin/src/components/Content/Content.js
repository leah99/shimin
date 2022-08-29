import React from "react";
import PropTypes from "prop-types";

import {BounceEffectLink} from "../../components"
import "./Content.scss";
  
const Content = ({header, link, linkTitle, paragraph, list}) => {
	return (
        <div className="content">
			<span className="content__header">
				{header && <span>{header}</span>}
				{link && linkTitle && <BounceEffectLink customClass={"content__header__link"} link={link} linkTitle={linkTitle}/>}
			</span>
			<span className="content__paragraph">
				{paragraph && paragraph.map((value, idx) => {
					return <span className="content__paragraph__container" key={idx}>{value}</span>
				})}
				{list && list.map((value, idx) => { 
					return <ul className="content__paragraph__ul" key={idx}>
						{value.title}
						{value.list.map((item, i) => {
							return <li className="content__paragraph__ul__li" key={i}>{item}</li>
						})}
					</ul>
				})}
			</span>
        </div>
	);
};

Content.propTypes = {
	/** Title */
	header: PropTypes.string,

	/** Link */
	link: PropTypes.string,

	/** Title embedded with link */
	linkTitle: PropTypes.string,

	/** Paragraph */
	paragraph: PropTypes.arrayOf(PropTypes.string),

	/** List */
	list: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.object), PropTypes.string]),
};

Content.defaultProps = {
	header: "",
	link: "",
	linkTitle: "",
	paragraph: "",
	list: "", //[{id: 1, title: "", list: ["", "", ""]}, {id: 2, title: "", list: ["", ""]}]
};

export default Content;