import React, { Component } from 'react';
import CssModules from 'react-css-modules';
import { Container, Row } from 'reactstrap';

import styles from './Detail.sass';
import Card from './Card/Card';

class Detail extends Component {
  constructor() {
    super();
    this.state = {
      detailCards: [
        { id: 1, title: 'Kleredrag', content: 'Semi-formeel' },
        { id: 2, title: 'Metgeselle', content: 'Slegs per uitnodiging' },
        { id: 3, title: 'Kinders', content: 'Geen kinders onder 10 jarige* ouderdom nie' },
        { id: 4, title: 'Dans', content: 'Shut up and dance with me' },
        { id: 5, title: 'Burger', content: 'Kos wat jou niks kos nie ;)' },
        { id: 6, title: 'Bonfire', content: 'Yay smores!' },
        { id: 7, title: 'Kroeg', content: 'Talk is cheap but money buys the Whiskey' },
        { id: 8, title: 'Warm drankies', content: 'As much as you can' },
        { id: 9, title: 'Maniere', content: 'Gedra jou, al is dit sleg' },
      ],
    };
  }

  render() {
    const cards = this.state.detailCards.map(card => (
      <Card
        key={card.id}
        title={card.title}
        content={card.content}
      />
    ));


    return (
      <section id="detail" styleName="section">
        <Container>
          <h1 styleName="section-title">Enjoy responsibly</h1>
          <Row>
            {cards}
          </Row>
        </Container>
      </section>
    );
  }
}

export default CssModules(Detail, styles);
