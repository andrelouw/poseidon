import React, { Component } from 'react';

import Landing from '../components/Landing/Landing';
import Info from '../components/Info/Info';

// eslint-disable-next-line
class App extends Component {
  render() {
    return (
      <div>
        <Landing />
        <Info />
      </div>
    );
  }
}

export default App;
