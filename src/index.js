import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';



setInterval(() => {
  const element=(
    <h1 className="heading">
      <span>The time is {new Date().toLocaleTimeString()}</span>
    </h1>
  );

  ReactDOM.render(element, document.getElementById('root'));
}, 1000);





