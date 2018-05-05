import React, { Component } from 'react';
import CssModules from 'react-css-modules';
import { Container, Row } from 'reactstrap';

import styles from './Info.sass';
import Card from '../shared/Card/Card';
import calendar from '../../assets/svg/calendar.svg';
import church from '../../assets/svg/church.svg';
import rsvp from '../../assets/svg/rsvp.svg';


class Info extends Component {
  constructor() {
    super();
    this.state = {
      infoCards: [
        {
          id: 1,
          title: '31 . 08 . 2018',
          content: '15:00 stap die bruid in… hopelik!',
          icon: calendar,
        },
        {
          id: 2,
          title: 'Lace on Timber',
          icon: church,
        },
        {
          id: 3,
          title: 'RSVP',
          content: 'teen 31.07.2018',
          icon: rsvp,
        },
      ],
    };
  }

  render() {
    const cards = this.state.infoCards.map(card => (
      <Card
        key={card.id}
        title={card.title}
        content={card.content}
        icon={card.icon}
      />
    ));

    return (
      <section id="info" styleName="section">
        <Container>
          <h1>{'Let\'s Celebrate!'}</h1>
          <Row>
            {cards}
          </Row>
        </Container>
      </section>
    );
  }
}

export default CssModules(Info, styles);
