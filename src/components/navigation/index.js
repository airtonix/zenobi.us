import React from 'react';
import classnames from '../../helpers/classnames';

export default function Navigation (props) {
    return <nav className={classnames(
        Navigation.CONST__CLASSNAME,
        {[`${props.mixClass}`]: props.mixClass}
    )}>
    {props.links.map(link => {

        <div className={classnames(
            `${Navigation.CONST__CLASSNAME}__link`,
            {[`${props.mixClass}__link`]: props.mixClass}
            )}>
            <a className={classnames(
                `${Navigation.CONST__CLASSNAME}__link`,
                {[`${props.mixClass}__link`]: props.mixClass}
                )}
                href={link.href}>{link.label}</a>
        </div>

    })}
    </nav>
}
Navigation.defaultProps = {
    links: []
};
Navigation.CONST__CLASSNAME = 'navigation';