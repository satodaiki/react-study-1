import React ,{ Component } from 'react';

export default class MyEvent extends Component {

    // constructor(props) {
    //     super(props);
    //     this.show = this.show.bind(this);
    // }

    // show = (e) => {
    //     console.log(`${this.props.greet},${e.target.value}!!`);
    // }

    show(suffix, e) {
        console.log(`${this.props.greet},${e.target.value}${suffix}!!`);
    }

    render() {
        return (
            <form>
                <label htmlFor="txtName">名前：</label>
                <input id="txtName" type="text" onChange={this.show.bind(this, 'さん')} />
                {/* <input id="txtName" type="text" onChange={this.show} /> */}
                {/* <input id="txtName" type="text" onChange={(e) => this.show(e)} /> */}
            </form>
        );
    }
}