import React from 'react';
import PageBase from './PageBase';

import HeroCard from '@components/cards/hero-card';

export default function HomePage (props) {
	return <PageBase mixClass="home-page">
		<HeroCard
			title="zenobi.us"
			subtitle="Web Developer, Vuejs, NodeJs and Docker"/>
	</PageBase>
}