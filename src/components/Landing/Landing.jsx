import React from 'react';
import { Col, Row } from 'reactstrap';
import CssModules from 'react-css-modules';

import styles from './Landing.sass';

const landing = () => (
  <Row>
    <Col>
      <h1>Dit is troutyd!</h1>
      <p styleName="title">Armann & Micheline</p>
      <p>Timer here</p>
    </Col>
  </Row>
);

export default CssModules(landing, styles);
