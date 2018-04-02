import React, { Component } from 'react';

import Landing from '../components/Landing/Landing';
import Info from '../components/Info/Info';
import Detail from '../components/Detail/Detail';

// eslint-disable-next-line
class App extends Component {
  render() {
    return (
      <div>
        <Landing />
        <Info />
        <Detail />
      </div>
    );
  }
}

export default App;
