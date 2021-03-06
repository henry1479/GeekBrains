import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Message from './App';
import Counter from './Counter';
import CounterTwo from './ClassCounter';
import Input from './Input';
import MessagesList from './MessagesList';
import reportWebVitals from './reportWebVitals';


const myName = 'Kostya';
const myLastName = 'Tsypa';

ReactDOM.render(
  <React.StrictMode>
    <Message lastName = {myName} />
    <Counter/>
    <CounterTwo/>
    <Input/>
    <MessagesList/>
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
