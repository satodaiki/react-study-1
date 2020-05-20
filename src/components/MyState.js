import React ,{ Component } from 'react';

export default class MyState extends Component {

    constructor(props) {
        super(props);
        this.state = {
            current: new Date()
        };
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                current: new Date()
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return (
            <div>（ライフサイクルメソッド）現在時刻は、{this.state.current.toLocaleString()}</div>
        );
    }
}