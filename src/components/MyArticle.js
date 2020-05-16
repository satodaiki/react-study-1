import React ,{ Component } from 'react';
import MyNew from './MyNew.js';

export default class MyArticle extends Component {

    renderIfNew(isNew) {
        if (isNew) {
            return <MyNew />
        }
    }

    render() {
        return (
            <React.Fragment>
                <dt>
                    <a href={this.props.url}>{this.props.title}</a>
                    { this.renderIfNew(this.props.isNew) }
                    {/* {(() => {
                        if (this.props.isNew) {
                            return <MyNew />
                        }
                    })()} */}
                    {/* {this.props.isNew && <MyNew /> } */}
                </dt>
                <dd>
                    {this.props.description}
                </dd>
            </React.Fragment>
        );
    }
}