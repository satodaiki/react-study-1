import React ,{ Component } from 'react';
import PropTypes from 'prop-types';

export class Member{}

export default class MyProp extends Component {
    render() {
        console.log(this.props);
        return <p>結果はコンソールを確認してください。</p>
    }
}

MyProp.propTypes = {
    prop1: PropTypes.instanceOf(Member),
    prop2: PropTypes.oneOf(['男', '女', '不明']),
    prop3: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool,
    ]),
    prop4: PropTypes.arrayOf(PropTypes.number),
    prop5: PropTypes.shape({
        name: PropTypes.string.isRequired,
        age: PropTypes.number,
        sex: PropTypes.oneOf(['男', '女', '不明']),
    })
}