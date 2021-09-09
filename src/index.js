// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

import ReactDOM from 'react-dom';

function Clock({locale}) {
    return (
      <h1 className="heading">
        <span className="text">Hello, {new Date().toLocaleTimeString(locale)}</span>
      </h1>
    )
}

ReactDOM.render(<Clock locale="bn-BD" />, document.getElementById('root'));




