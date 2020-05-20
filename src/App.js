import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink, Route, Switch } from "react-router-dom";

import MyTop from './components/MyTop';
import MyHello from './components/MyHello';
// import MyArticle from './components/MyArticle';
import MyArticle2 from './components/MyArticle2';

const article = {
  url: 'https://google.com/',
  title: 'Test',
  description:'テストです(googleのHPに遷移します。)',
  isNew: false
};

export default class App extends Component {

  render() {
    const current = { color: "Red" };
    return (
      <Router>
        <h2>通常リンク</h2>
        <ul>
          <li><Link to="/">トップ</Link></li>
          <li><Link to="/hello">Hello</Link></li>
          {/* <li><Link to="/article">公開記事</Link></li> */}
          <li><Link to="/article/100">記事No.100</Link></li>
          <li><Link to="/unchi">存在しないパス</Link></li>
        </ul>
        <h2>ナビリンク</h2>
        <ul>
          <li><NavLink exact to="/" activeStyle={current}>トップ</NavLink></li>
          <li><NavLink to="/hello" activeStyle={current}>Hello</NavLink></li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/" component={MyTop} />
          <Route path="/hello" render={() => <MyHello name="aaaa" />} />
          {/* <Route path="/article" render={() => <MyArticle {...article} key={article.url} />} /> */}
          <Route path="/article/:id" component={MyArticle2} />
          <Route component={MyTop} />
        </Switch>
      </Router>
    );
  }
}