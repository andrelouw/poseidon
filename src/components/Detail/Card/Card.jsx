import React from 'react';
import PropTypes from 'prop-types';
import CssModules from 'react-css-modules';
import { Col } from 'reactstrap';

import styles from './Card.sass';

const card = props =>
  (
    <Col sm="4">
      <div styleName="icon-card">
        <div styleName="card-header">
          <div styleName="card-icon" />
        </div>
        <div styleName="card-content">
          <p styleName="title">{props.title}</p>
          <p styleName="content">{props.content}</p>
        </div>
      </div>
    </Col>
  );


card.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
};

card.defaultProps = {
  content: '',
};

export default CssModules(card, styles);
