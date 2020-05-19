import React ,{ Component } from 'react';

export default class MyCheck extends Component {

    constructor(props) {
        super(props);
        this.state = {
            send: true,
        };
        this.handleChangeCheck = this.handleChangeCheck.bind(this);
        this.show = this.show.bind(this);
    }

    handleChangeCheck(e) {
        this.setState({
            [e.target.name]: e.target.checked
        });
    }

    show() {
        console.log(`メール送付：${this.state.send ? '有効' : '無効'}`);
    }

    render() {
        return (
            <form>
                <label htmlFor="send">メール送付？：</label>
                <input id="send" name="send" type="checkbox" checked={this.state.checked} onChange={this.handleChangeCheck} /><br />
                <button type="button" onClick={this.show}>送信</button>
            </form>
        );
    }

}