import React from 'react'

import Card from './card';


export default function PostCard (props) {
	return (
		<Card mixClass={PostCard.CONST__BASECLASS}>
			<h2 className={`${PostCard.CONST__BASECLASS}__title`}>{props.title}</h2>
			<p className={`${PostCard.CONST__BASECLASS}__subtitle`}>{props.subtitle}</p>
		</Card>
	)
}

PostCard.CONST__BASECLASS = 'post-card';