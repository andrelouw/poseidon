import React, { Component } from 'react';
import CssModules from 'react-css-modules';
import { Col, Container, Row } from 'reactstrap';

import styles from './Quote.sass';

class Quote extends Component {
  constructor() {
    super();
    this.state = {
      quote: {
        text: 'Lorem ipsum dolor amet literally live-edge single-origin coffee listicle,\n' +
      'art party tacos whatever unicorn sriracha mumblecore humblebrag chicharrones.\n' +
      'Butcher tattooed quinoa mumblecore humblebrag.',
        verse: '1 Corinthians 14:6',
      },
    };
  }

  render() {
    return (
      <section id="quote" className="text-center" styleName="quote">
        <Container>
          <Row>
            <Col sm="12">
              <p styleName="text">{this.state.quote.text}</p>
              <p styleName="verse">{this.state.quote.verse}</p>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default CssModules(Quote, styles);
