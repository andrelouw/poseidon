import React from 'react';
import PropTypes from 'prop-types';
import CssModules from 'react-css-modules';
import { Container, Row } from 'reactstrap';

import Card from '../Card/Card';
import styles from './Group.sass';


const group = (props) => {
  const mappedCards = props.cards.map(card => (
    <Card
      key={card.key}
      name={card.name}
      quote={card.quote}
      image={card.image}
    />
  ));

  return (
    <section id="info" styleName="section">
      <Container>
        <h2>{props.heading}</h2>
        <Row>
          {mappedCards}
        </Row>
      </Container>
    </section>
  );
};

group.propTypes = {
  heading: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  })).isRequired,
};

export default CssModules(group, styles);

