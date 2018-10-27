import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-static'

export default function Navigation (props) {

    return (
        <nav className={classnames(
            Navigation.CONST__CLASSNAME,
            props.mixClass,
            props.classes
        )}>
            {props.routes.map((link, index) =>
                (
                <div className={classnames(
                    `${Navigation.CONST__CLASSNAME}__link`,
                    {[`${props.mixClass}__link`]: props.mixClass},
                    )}>
                    <Link className={classnames(
                        `${Navigation.CONST__CLASSNAME}__link`,
                        {[`${props.mixClass}__link`]: props.mixClass}
                        )}
                        key={`${index}`}
                        to={link.href}>{link.label}</Link>
                </div>
                )
            )}
        </nav>
    )
}
Navigation.propTypes = {
    links: PropTypes.array,
    mixClass: PropTypes.string,
    classes: PropTypes.string
}
Navigation.defaultProps = {
    routes: [],
};
Navigation.CONST__CLASSNAME = 'navigation';