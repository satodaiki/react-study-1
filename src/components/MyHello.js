import React ,{ Component } from 'react';
import PropTypes from 'prop-types';

export default class MyHello extends Component {

    static propTypes = {
        name: PropTypes.string.isRequired
    };

    render() {
        return <div>こんにちは、{this.props.name}さん</div>;
    }
}