import React, {Fragment} from 'react';
import { withRouteData, Link } from 'react-static'
import PageBase from './PageBase';


export default withRouteData( (props) => {
	return <PageBase mixClass="generic-page">
		<h3 className="page__header">{props.title}</h3>
		<main className="page__body">
			{props.content}
		</main>
	</PageBase>
})