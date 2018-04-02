import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';

import Card from './Card/Card';

// eslint-disable-next-line
class Info extends Component {
  constructor() {
    super();
    this.state = {
      infoCards: [
        { id: 1, title: 'Hello Card 1', content: 'Content 1' },
        { id: 2, title: 'Hello Card 2', content: 'Content 2' },
        { id: 3, title: 'Hello Card 3', content: 'Content 3' },
      ],
    };
  }

  render() {
    const cards = this.state.infoCards.map(card => (
      <Card
        key={card.id}
        title={card.title}
        content={card.content}
      />
    ));

    return (
      <section id="info">
        <Container>
          <h1>
            {'Let\'s Celebrate!'}
          </h1>
          <Row>
            {cards}
          </Row>
        </Container>
      </section>
    );
  }
}

export default Info;
