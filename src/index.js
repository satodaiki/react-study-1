import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import MyHello from './components/MyHello';
import MyType from './components/MyType';
import MyAttrMulti from './components/MyAttrMulti';
import MyHelloContent from './components/MyHelloContent';
import MyBook from './components/MyBook';

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

ReactDOM.render(
  <div>
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
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();