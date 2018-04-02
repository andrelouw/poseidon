import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'reactstrap';

const card = props =>
  (
    <Col sm="4">
      <div className="icon-card">
        <div className="icon-card-header">
          <div className="icon-card-icon" />
        </div>
        <div className="icon-card-content">
          <h2>{props.title}</h2>
          <p>{props.content}</p>
        </div>
      </div>
    </Col>
  );


card.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default card;
