import React ,{ Component } from 'react';

export default class MyState extends Component {

    constructor(props) {
        super(props);
        this.state = {
            current: new Date()
        };
        setInterval(() => {
            this.setState({
                current: new Date()
            });
        }, 1000);
    }

    render() {
        return (
            <div>現在時刻は、{this.state.current.toLocaleString()}</div>
        );
    }
}