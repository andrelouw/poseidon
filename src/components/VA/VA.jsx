import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import CssModules from 'react-css-modules';

import styles from './VA.sass';
import Venue from './Venue/Venue';

class VA extends Component {
  constructor() {
    super();
    this.state = {
      venue: {
        name: 'Lace on Timber',
        description: 'Kyk solank bietjie na\n' +
        'ons trouvenue,\n' +
        'net buite Pretoria:',
        btnText: 'Lace on Timber website',
        btnUrl: 'http://www.news.com',
      },
    };
  }

  render() {
    return (
      <section id="venue">
        <Container>
          <Row>
            <Venue
              name={this.state.venue.name}
              description={this.state.venue.description}
              btnText={this.state.venue.btnText}
              btnUrl={this.state.venue.btnUrl}
            />
          </Row>
        </Container>
      </section>
    );
  }
}

export default CssModules(VA, styles);
