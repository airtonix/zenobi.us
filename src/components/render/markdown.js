import React from 'react';
import marked from 'marked';

export default function Markdown ({content}) {
    return (
        <div dangerouslySetInnerHTML={(
            {__html: marked(props.body)}
        )}/>
    )
}