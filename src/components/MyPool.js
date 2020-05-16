import React ,{ Component } from 'react';

export default class MyPool extends Component {

    // show(e) {
    //     console.log(e.type);
    //     setTimeout(() => {
    //         console.log(e.type);
    //     }, 1000);
    // }

    // show(e) {
    //     const t = e.type;
    //     console.log(t);
    //     setTimeout(() => {
    //         console.log(t);
    //     }, 1000);
    // }

    show(e) {
        e.persist();
        console.log(e.type);
        setTimeout(() => {
            console.log(e.type);
        }, 1000);
    }

    render() {
        return (
            <button type="button" onClick={this.show.bind(this)}>イベント情報</button>
        );
    }
}