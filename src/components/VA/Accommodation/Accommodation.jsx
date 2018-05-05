import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import CssModules from 'react-css-modules';
import PropTypes from 'prop-types';

import styles from './Accommodation.sass';

class Accommodation extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super();
  }

  render() {
    const buttons = (
      <div>
        <Row>
          <Col sm={{ size: 6, offset: 1 }}>
            <a
              href={this.props.buttons[0].btnUrl}
              target="_blank"
              className="btn btn-block"
              styleName="button"
            >{this.props.buttons[0].btnText}
            </a>
          </Col>
          <Col sm={{ size: 4 }}>
            <a
              href={this.props.buttons[1].btnUrl}
              target="_blank"
              className="btn btn-block"
              styleName="button"
            >{this.props.buttons[1].btnText}
            </a>
          </Col>
        </Row>
        <br />
        <Row>
          <Col sm={{ size: 4, offset: 1 }}>
            <a
              href={this.props.buttons[2].btnUrl}
              target="_blank"
              className="btn btn-block"
              styleName="button"
            >{this.props.buttons[2].btnText}
            </a>
          </Col>
          <Col sm={{ size: 6 }}>
            <a
              href={this.props.buttons[3].btnUrl}
              target="_blank"
              className="btn btn-block"
              styleName="button"
            >{this.props.buttons[3].btnText}
            </a>
          </Col>
        </Row>
      </div>
    );

    return (
      <Col sm="6" className="text-center">
        <h2>{this.props.heading}</h2>
        <p styleName="description">{this.props.description}</p>
        {buttons}
      </Col>
    );
  }
}

export default CssModules(Accommodation, styles);

Accommodation.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttons: PropTypes.arrayOf(PropTypes.shape({
    btnText: PropTypes.string.isRequired,
    btnUrl: PropTypes.string.isRequired,
  })).isRequired,
};
