import React from 'react';

export default function Page ({
	children,
	mixClass
}) {

		return <div className={classnames(
				Page.CONST__BASECLASS,
				mixClass
			)}>
			{children}
		</div>

}

Page.CONST__BASECLASS = 'page';

