import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';

// eslint-disable-next-line
class Info extends Component {
  render() {
    return (
      <section id="info">
        <Container>
          <h1>
            {'Let\'s Celebrate!'}
          </h1>
          <Row>
            Content here
          </Row>
        </Container>
      </section>
    );
  }
}

export default Info;
