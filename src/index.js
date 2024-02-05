import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; //recieves the information from the App component
import reportWebVitals from './reportWebVitals'; //a part of the create-react-app install for vitals; works fine but complies with a warning, annoying to comment out

const root = ReactDOM.createRoot(document.getElementById('root')); //appending(rendering everything to the div with the id of root in html)| we call root
root.render( //calls for the root variable to render
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); //a part of the create-react-app install for vitals; works fine but complies with a warning, annoying to comment out
