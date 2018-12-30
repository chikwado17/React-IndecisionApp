import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
// import 'bootstrap/dist/css/bootstrap.css';
import './styles/styles.scss';










const AppRoot = document.getElementById("app");
ReactDOM.render(<IndecisionApp />,AppRoot);