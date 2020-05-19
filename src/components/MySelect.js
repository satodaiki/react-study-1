import React ,{ Component } from 'react';

export default class MySelect extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fruit: 'apple',
        };
        this.handleChange = this.handleChange.bind(this);
        this.show = this.show.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    show() {
        console.log(`好きな果物：${this.state.fruit}`);
    }

    render() {
        return (
            <form>
                <label htmlFor="fruit">好きな果物：</label>
                <select id="fruit" name="fruit" value={this.state.fruit} onChange={this.handleChange}>
                    <option value="apple">リンゴ</option>
                    <option value="orange">オレンジ</option>
                    <option value="melon">メロン</option>
                    <option value="grape">葡萄</option>
                    <option value="strawberry">苺</option>
                </select>
                <button type="button" onClick={this.show}>送信</button>
            </form>
        );
    }

}