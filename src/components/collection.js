import React from 'react';
import PropTypes from 'prop-types'
import {Catch} from '@compositor/x0/components';

export default class Collection extends React.Component {
    static propTypes = {
        source: PropTypes.string,
        pattern: PropTypes.string
    }

    static defaultProps = {
        pattern: '*'
    }

    constructor (props) {
        super(props);
        this.state = {
            collection: []
        };
    }

    static getCollection (source, pattern) {
        if (!window) return [];
        return require.context(source, true, pattern);
    }

    componentDidMount () {
        if (!this.props.source) return;

        this.setState({
            collection: Collection.getCollection(this.props.source, this.props.pattern)
        })
    }

    render () {
        return (
            <Catch>
            {this.state.collection.map(item => this.props.children(item))}
            </Catch>
        )
    }
}