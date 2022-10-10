import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//INI LATIHAN (1)------
// const name = "Pradipta Ramadhan";
// const element = <h1>Hallo {name} !</h1>;
//
// ReactDOM.render(element, document.getElementById('master'));
// -----------------


//INI LATIHAN (2)------
// const name = "Pradipta Ramadhan";
//
// function getName(){
//
//   return name
// }
//
// const element = <h1>Hallo {getName(name)} !</h1>;
//
// ReactDOM.render(element, document.getElementById('master'));
// -----------------


//INI LATIHAN (3)------
// const name = "BlackHaze";
//
// function greet(){
//
//   return "Hello " + name
// }
//
// const element = <h1>{greet(name)} !</h1>;
//
// ReactDOM.render(element, document.getElementById('master'));
// -----------------

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
