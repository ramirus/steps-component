import React, { Component } from 'react';
import Steps from './components/Steps'

const steps = [
  {
    label: 'Design',
  },
  {
    label: 'Build',
  },
  {
    label: 'Launch',
  },
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Steps
          steps={steps}
        />
      </div>
    );
  }
}

export default App;
