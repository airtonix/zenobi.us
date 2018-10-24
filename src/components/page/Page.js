import React, {Fragment} from 'react';
import PageBase from './PageBase';
import { withRouteData, Link } from 'react-static'
import marked from 'marked'

export default withRouteData( (props) => {
	return <PageBase mixClass="generic-page">
		<h3 className="page__header">{props.attributes.title}</h3>
		<main className="page__body">
			<div dangerouslySetInnerHTML={(
				{__html: marked(props.body)}
			)}/>
		</main>
	</PageBase>
})