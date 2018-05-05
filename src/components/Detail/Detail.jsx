import React, { Component } from 'react';
import CssModules from 'react-css-modules';
import { Container, Row } from 'reactstrap';

import styles from './Detail.sass';
import Card from './Card/Card';
import dressCode from '../../assets/svg/dress_code.svg';
import plusOne from '../../assets/svg/plus_one.svg';
import kids from '../../assets/svg/kids.svg';
import dancing from '../../assets/svg/dancing.svg';
import food from '../../assets/svg/food.svg';
import bonfire from '../../assets/svg/bonfire.svg';
import bar from '../../assets/svg/bar.svg';
import warmDrinks from '../../assets/svg/warm_drinks.svg';
import manners from '../../assets/svg/manners.svg';
import protea from '../../assets/svg/protea_2.svg';

class Detail extends Component {
  constructor() {
    super();
    this.state = {
      detailCards: [
        {
          id: 1,
          title: 'Kleredrag',
          content: 'Semi-formeel',
          icon: dressCode,
        },
        {
          id: 2,
          title: 'Metgeselle',
          content: 'Slegs per uitnodiging',
          icon: plusOne,
        },
        {
          id: 3,
          title: 'Kinders',
          content: 'Geen kinders onder 10 jarige* ouderdom nie',
          icon: kids,
        },
        {
          id: 4,
          title: 'Dans',
          content: 'Shut up and dance with me',
          icon: dancing,
        },
        {
          id: 5,
          title: 'Burger',
          content: 'Kos wat jou niks kos nie ;)',
          icon: food,
        },
        {
          id: 6,
          title: 'Bonfire',
          content: 'Yay smores!',
          icon: bonfire,
        },
        {
          id: 7,
          title: 'Kroeg',
          content: 'Talk is cheap but money buys the Whiskey',
          icon: bar,
        },
        {
          id: 8,
          title: 'Warm drankies',
          content: 'As much as you can',
          icon: warmDrinks,
        },
        {
          id: 9,
          title: 'Maniere',
          content: 'Gedra jou, al is dit sleg',
          icon: manners,
        },
      ],
    };
  }

  render() {
    const cards = this.state.detailCards.map(card => (
      <Card
        key={card.id}
        title={card.title}
        content={card.content}
        icon={card.icon}
      />
    ));


    return (
      <section id="detail" styleName="section">
        <div styleName="protea-container">
          <img styleName="protea" alt="protea" src={protea} />
        </div>
        <Container>
          <h1>Enjoy responsibly</h1>
          <Row>
            {cards}
          </Row>
        </Container>
      </section>
    );
  }
}

export default CssModules(Detail, styles);
