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
// ReactDOM.render(what do I want to render, where do I want to render it)
// root is in index.html and is like a container for our application
// JSX javascript version of html. Most of JSX is identical to html with slight differences

reportWebVitals();
