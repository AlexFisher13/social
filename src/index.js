import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './bootstrap-grid.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogBase = [
    {name: "Conor McGregor"},
    {name: "Henry Sekhydo"},
    {name: "John Johns"},
    {name: "Daniel Kormie"}
];

let messageBase = [
    {text: "I'm fine, and you?"},
    {text: "Hey how are you?"},
    {text: "Hello"}
];

let posts = [
    {message: 'Hello'},
    {message: 'Yahooo'},
    {message: 'My First Post'}
];

ReactDOM.render(<App dialogBase={dialogBase} messageBase={messageBase} posts={posts} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
