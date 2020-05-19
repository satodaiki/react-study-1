import React ,{ Component } from 'react';

export default class MyRadio extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sex: 'male',
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
        console.log(`性別：${this.state.sex}`);
    }

    render() {
        return (
            <form>
                <fieldset>
                    <legend>性別：</legend>
                    <label htmlFor="sex_male">男性</label>
                    <input id="sex_male" name="sex" type="radio" value="male" checked={this.state.sex === 'male'} onChange={this.handleChange} /><br />
                    <label htmlFor="sex_female">女性</label>
                    <input id="sex_female" name="sex" type="radio" value="female" checked={this.state.sex === 'female'} onChange={this.handleChange} /><br />
                    <label htmlFor="sex_other">その他</label>
                    <input id="sex_other" name="sex" type="radio" value="other" checked={this.state.sex === 'other'} onChange={this.handleChange} /><br />
                </fieldset>
                <button type="button" onClick={this.show}>送信</button>
            </form>
        );
    }

}