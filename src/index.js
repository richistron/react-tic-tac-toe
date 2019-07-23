import React from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends React.Component {
  render() {
    return <div>Hello World</div>;
  }
}
 
document.body.innerHTML = '<div id="app"></div>';

const rootElement = document.getElementById('app');

ReactDOM.render(<MyComponent />, rootElement);
