import React from 'react';
import {render} from 'react-dom';
import PrinterConsumerComponent from './Components/PrinterConsumerComponent.jsx';

class App extends React.Component {
  render() {
    return (
        <div>
          <h1>This is a React Project</h1>
          <PrinterConsumerComponent />
        </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
