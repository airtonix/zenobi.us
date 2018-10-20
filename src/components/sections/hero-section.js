import React from 'react'

import Section from './section';


export default function HeroSection (props) {
	return (
		<Section mixClass={HeroSection.CONST__BASECLASS}>
			<h2 className={`${HeroSection.CONST__BASECLASS}__title`}>{props.title}</h2>
			<p className={`${HeroSection.CONST__BASECLASS}__subtitle`}>{props.subtitle}</p>
		</Section>
	)
}

HeroSection.CONST__BASECLASS = 'hero-section';