import React from 'react';
import CssModules from 'react-css-modules';
import { Col, Container, Row } from 'reactstrap';

import styles from './Gifts.sass';

const gifts = () => (
  <section id="gifts" styleName="section">
    <h1>Geskenke</h1>
    <Container>
      <Row styleName="gifts-left">
        <Col sm="3" >
          <div styleName="gift-icon" />
        </Col>
        <Col sm="9">
          <h2>Register</h2>
          <p>Ons het dit vir julle makliker gemaak met ’n lys van ons
            gunsteling goed by @Home om ons huisie mee te begin bou!
          </p>
          <bold>@Home kode - Reynecke123</bold>
        </Col>
      </Row>
      <Row styleName="gifts-right">
        <Col sm="9">
          <h2>Kickstart fund</h2>
          <p>Enige donasies sal baie waardeer word!
            Geskenke & die Piggy-bank is in die voorportaal.
          </p>
        </Col>
        <Col sm="3" >
          <div styleName="gift-icon" />
        </Col>
      </Row>
    </Container>
  </section>
);

export default CssModules(gifts, styles);
