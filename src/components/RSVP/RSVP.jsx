import React, { Component } from 'react';
import CssModules from 'react-css-modules';
import { Container, Row } from 'reactstrap';

import styles from './RSVP.sass';
import Card from '../shared/Card/Card';

class RSVP extends Component {
  constructor() {
    super();
    this.state = {
      rsvpCards: [
        { id: 1, title: 'Email ons!', content: 'michelinegrobbelaar95@gmail.com' },
        { id: 2, title: 'Sms of Whatsapp ons!', content: 'M: 082 352 1962 A: 082 853 9750' },
        { id: 3, title: 'Laatweet ons!', content: 'Teen 31 Julie 2018' },
      ],
    };
  }

  render() {
    const cards = this.state.rsvpCards.map(card => (
      <Card
        key={card.id}
        title={card.title}
        content={card.content}
      />
    ));

    return (
      <section id="info" styleName="section">
        <Container>
          <h1>{'RSVP\'s'}</h1>
          <Row>
            {cards}
          </Row>
        </Container>
      </section>
    );
  }
}

export default CssModules(RSVP, styles);
