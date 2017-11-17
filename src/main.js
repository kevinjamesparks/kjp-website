import React from 'react';
import ReactDOM from 'react-dom';
import counter from './counter';
 
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(counter),
    document.getElementById('mount')
  );
});