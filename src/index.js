import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MyList from './MyList'
import reportWebVitals from './reportWebVitals';

const toDos = ["take out the dog", "walk the garbage", "dirty the dishes", "go back to procrastinating"]

const toDosTwo = ["take out the dog", "walk the garbage", "dirty the dishes", "go back to procrastinating"]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <MyList theList={toDos} />
    <MyList theList={toDosTwo} />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();