import React from 'react';
import { Col } from 'reactstrap';
import CssModules from 'react-css-modules';
import PropTypes from 'prop-types';

import styles from './Venue.sass';

const venue = props =>
  (
    <Col sm="6" className="text-center">
      <h2>{props.name}</h2>
      <p styleName="description">{props.description}</p>
      {/* eslint-disable-next-line */}
      <a href={props.btnUrl} target="_blank" className="btn btn-dark">{props.btnText}</a>

    </Col>
  );

export default CssModules(venue, styles);

venue.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
  btnUrl: PropTypes.string.isRequired,
};
