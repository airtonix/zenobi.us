import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'


import "./navigation.scss";

export default function Navigation (props) {
    const links = (items) => items.map(link => (
        <div className={classnames(
            `${Navigation.CONST__CLASSNAME}__link`,
            {[`${props.mixClass}__link`]: props.mixClass},
            )}>
            <Link className={classnames(
                `${Navigation.CONST__CLASSNAME}__link`,
                {[`${props.mixClass}__link`]: props.mixClass}
                )}
                to={link.href}>{link.label}</Link>
        </div>
    ))

    return (
        <nav className={classnames(
            Navigation.CONST__CLASSNAME,
            props.mixClass,
            props.classes
        )}>
            {props.routes}
        </nav>
    )
}
Navigation.propTypes = {
    links: PropTypes.array,
    mixClass: PropTypes.string,
    classes: PropTypes.string
}
Navigation.defaultProps = {
    links: [],
};
Navigation.CONST__CLASSNAME = 'navigation';