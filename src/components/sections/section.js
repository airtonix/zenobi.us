import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';


import "@uikit/functions/typeface.scss";
import "./sections.scss";

export default function Header (props) {
	return (
			<div className={classnames(
					Header.CONST__BASECLASS,
					props.mixClass,
					props.classNames
				)}>
				{props.children}
			</div>
	)
}

Header.propTypes = {
	mixClass: PropTypes.string,
	classNames: PropTypes.string,
}
Header.CONST__BASECLASS = 'section';