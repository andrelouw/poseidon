import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import CssModules from 'react-css-modules';

import styles from './Landing.sass';

const landing = () => (
  <div styleName="header">
    <Container>
      <Row>
        <Col>
          <div styleName="landing">
            <div styleName="intro">
              <h1>Dit is troutyd!</h1>
              <p styleName="title">Armann & Micheline</p>
              <p styleName="timer">Timer here</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default CssModules(landing, styles);
