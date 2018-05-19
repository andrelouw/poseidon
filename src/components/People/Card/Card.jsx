import React from 'react';
import PropTypes from 'prop-types';
import CssModules from 'react-css-modules';
import { Col } from 'reactstrap';

import styles from './Card.sass';

const card = props =>
  (
    <Col sm="3">
      <div styleName="icon-card">
        <div styleName="card-header">
          <img styleName="card-image" src={props.image} alt="profile" />
        </div>
        <div styleName="card-content">
          <p styleName="name">{props.name}</p>
          <p styleName="quote">{props.quote}</p>
        </div>
      </div>
    </Col>
  );

card.propTypes = {
  name: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default CssModules(card, styles);
