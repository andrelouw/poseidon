import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import CssModules from 'react-css-modules';

import styles from './VA.sass';
import Venue from './Venue/Venue';
import Accommodation from './Accommodation/Accommodation';
import protea from '../../assets/svg/protea_3.svg';

class VA extends Component {
  constructor() {
    super();
    this.state = {
      venue: {
        name: 'lace on timber',
        description: 'kyk solank bietjie na\n' +
        'ons trouvenue,\n' +
        'net buite pretoria:',
        btnText: 'lace on timber website',
        btnUrl: 'http://www.news.com',
      },
      accommodation: {
        heading: 'Waar le jy?',
        description: 'Hier is ’n lys van gastehuise naby die venue:',
        buttons: [
          { btnText: 'Silver Fig Guesthouse', btnUrl: 'http://www.news.com' },
          { btnText: 'Guesthouse @56', btnUrl: 'http://www.news.com' },
          { btnText: 'Pearl Guesthouse', btnUrl: 'http://www.news.com' },
          { btnText: 'Bullfrogs Nest Guesthouse', btnUrl: 'http://www.news.com' },
        ],
      },
    };
  }

  render() {
    return (
      <section id="venue" styleName="section">
        <div styleName="protea-container">
          <img styleName="protea" src={protea} alt="protea" />
        </div>
        <h1>Venue & Akkommodasie</h1>
        <Container>
          <Row>
            <Venue
              name={this.state.venue.name}
              description={this.state.venue.description}
              btnText={this.state.venue.btnText}
              btnUrl={this.state.venue.btnUrl}
            />
            <Accommodation
              heading={this.state.accommodation.heading}
              description={this.state.accommodation.description}
              buttons={this.state.accommodation.buttons}
            />
          </Row>
        </Container>
      </section>
    );
  }
}

export default CssModules(VA, styles);
