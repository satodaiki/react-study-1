import React ,{ Component } from 'react';

export default class MyList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fruit: ['apple', 'melon'],
        };
        this.handleChangeList = this.handleChangeList.bind(this);
        this.show = this.show.bind(this);
    }

    handleChangeList(e) {
        const data = [];
        const opts = e.target.options;

        for (let i = 0; i < opts.length; i++) {
            if (opts[i].selected) {
                data.push(opts[i].value);
            }
        }
        this.setState({
            [e.target.name]: data
        });
    }

    show() {
        console.log(`好きな果物：${this.state.fruit}`);
    }

    render() {
        return (
            <form>
                <label htmlFor="fruit">好きな果物：</label>
                <select id="fruit" name="fruit" value={this.state.fruit} onChange={this.handleChangeList} multiple={true}>
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