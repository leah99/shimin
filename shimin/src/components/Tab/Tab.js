import React, { useState, Children } from "react";
import PropTypes from "prop-types";
import "./Tab.scss";

const Tab = ({ menu, children, activeIndex }) => {
	/** Active State Hook */
	const [activeTab, setActiveTab] = useState(activeIndex);
	
	const handleActiveTab = (e, idx) => {
		setActiveTab(idx)
	}

	return (
		<div className="tab">
			<ul className="tab__label">
				{menu.map((key, i) => (
					<li className={activeTab === i ? "tab__label__selected" : "tab__label__unselected"} key={`tab-${i}`} onClick={(e) => handleActiveTab(e, i)}>
						{key}
					</li>
				))}
			</ul>
			<div className="tab__content">
				{Children.map(children, (child, idx) => activeTab === idx && (
					<div className="tab__content__container">{child}</div>
				))}
			</div>
		</div>
	);
};

Tab.propTypes = {
	/** Id of tab */
	id: PropTypes.string,

	/** Index value of tab */
	activeIndex: PropTypes.number,

	/** Menu list */
	menu: PropTypes.arrayOf(PropTypes.string),

	/** Tab content */
	children: PropTypes.node,
};

Tab.defaultProps = {
	menu: ["Tab1", "Tab2", "Tab3"],
	children: <></>,
	activeIndex: 0,
};

export default Tab;