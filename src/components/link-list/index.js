import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';


export default function LinkedList (props) {
    return (
        <div className={classnames(
            LinkedList.CONST__CLASSNAME,
            {[`${props.mixClass}`]: props.mixClass}
        )}>
            {props.links.map(link => (
                <a className={classnames(
                    `${LinkedList.CONST__CLASSNAME}__link`,
                    {[`${props.mixClass}__link`]: props.mixClass}
                    )}
                    href={link.path}>
                    <span className={classnames(
                        `${LinkedList.CONST__CLASSNAME}__label`,
                        {[`${props.mixClass}__label`]: props.mixClass}
                    )}>{link.name}</span>
                </a>
            ))}
        </div>
    )
}

LinkedList.CONST__CLASSNAME = 'linked-list';
LinkedList.propTypes = {
    mixClass: PropTypes.string,
    classNames: PropTypes.string,
    links: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        href: PropTypes.string,
    }))
};
LinkedList.defaultProps = {};