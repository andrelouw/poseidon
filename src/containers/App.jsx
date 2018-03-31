import React, { Component } from 'react';
import { Container } from 'reactstrap';

import Landing from '../components/Landing/Landing';

// eslint-disable-next-line
class App extends Component {
  render() {
    return (
      <Container>
        <Landing />
      </Container>
    );
  }
}

export default App;
