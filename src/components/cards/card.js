import React from 'react';

import classnames from 'classnames';


export default function Header (props) {
	return (
			<div className={classnames(
					Header.CONST__BASECLASS,
					props.mixClass
				)}>
				{props.children}
			</div>
	)
}

Header.CONST__BASECLASS = 'section';