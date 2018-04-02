import React, { Component } from 'react';
import CssModules from 'react-css-modules';
import { Container, Row } from 'reactstrap';

import styles from './Info.sass';
import Card from './Card/Card';

// eslint-disable-next-line
class Info extends Component {
  constructor() {
    super();
    this.state = {
      infoCards: [
        { id: 1, title: '31 . 08 . 2018', content: '15:00 stap die bruid in… hopelik!' },
        { id: 2, title: 'Lace on Timber' },
        { id: 3, title: 'RSVP', content: 'teen 31.07.2018' },
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
      <section id="info" styleName="section">
        <Container>
          <h1 styleName="section-title">
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

export default CssModules(Info, styles);
