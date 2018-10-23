import React from 'react'

import Card from './card';


export default function HeroCard (props) {
	return (
		<Card mixClass={HeroCard.CONST__BASECLASS}>
			<h2 className={`${HeroCard.CONST__BASECLASS}__title`}>{props.title}</h2>
			<p className={`${HeroCard.CONST__BASECLASS}__subtitle`}>{props.subtitle}</p>
		</Card>
	)
}

HeroCard.CONST__BASECLASS = 'hero-card';