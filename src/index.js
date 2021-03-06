import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import App from './App';
import MyHello from './components/MyHello';
import MyType from './components/MyType';
import MyAttrMulti from './components/MyAttrMulti';
import MyHelloContent from './components/MyHelloContent';
import MyBook from './components/MyBook';
// import MyProp, {Member} from './components/MyProp';
import MyHelloDef from './components/MyHelloDef';
import MyArticle from './components/MyArticle';
import MyEvent from './components/MyEvent';
import MyPool from './components/MyPool';
import MyState from './components/MyState';
import MyParent from './components/MyParent';
import MyForm from './components/MyForm';
import MyFormUn from './components/MyFormUn';
import MyTextarea from './components/MyTextarea';
import MySelect from './components/MySelect';
import MyList from './components/MyList';
import MyRadio from './components/MyRadio';
import MyCheck from './components/MyCheck';
import MyCheckMulti from './components/MyCheckMulti';
import MyFile from './components/MyFile';

const data = {
  name: 'テスト',
  age: 100,
  sex: '男'
}

const book = {
  isbn: 'WGS-JST-001',
  title: '速習 webpack',
  price: 454,
  published: 'WINGSプロジェクト'
}

const articles = [
  {
    url: 'https://www.atmarkit.co.jp/ait/series/9383/',
    title: 'AngularTIPS',
    description:'人気のJavaScriptフレームワーク「Angular」の目的別リファレンス',
    isNew: true
  },
  {
    url: 'https://google.com/',
    title: 'Test',
    description:'テストです(googleのHPに遷移します。)',
    isNew: false
  },
]

// const list = articles.map((article) => <MyArticle {...article} key={article.url} />);

ReactDOM.render(
  <div>
    <App />
    <MyHello name="ああああ" />
    <MyType value="success" />
    <MyType value={'test'} />
    <MyType value={ 108 } />
    <MyType value={ ['ああ', 'いい', 'うう'] } />
    <MyType value={ {name: 'testname', value: 'testvalue'} } />
    <MyType value={ () => console.log('Hoge') } />
    <MyAttrMulti {...data} />
    <MyHelloContent>
      <b>テスト</b>
    </MyHelloContent>
    <MyBook info={book} />
    {/* 以下エラーパターン */}
    {/* <MyProp prop1="test" /> */}
    {/* <MyProp prop2="test" /> */}
    {/* <MyProp prop3={new Member()} /> */}
    {/* <MyProp prop4={[ 1000, 'テスト']} /> */}
    {/* <MyProp prop5={{ age: 40, sex: '男'}} /> */}
    <MyHelloDef />
    <dl>
      {articles.map((article) =>
        <MyArticle {...article} key={article.url} />
      )}
    </dl>
    <MyEvent greet="Hello" />
    <MyPool />
    <MyState />
    <MyParent />
    <MyForm />
    <MyFormUn />
    <MyTextarea />
    <MySelect />
    <MyList />
    <MyRadio />
    <MyCheck />
    <MyCheckMulti />
    <MyFile />
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
