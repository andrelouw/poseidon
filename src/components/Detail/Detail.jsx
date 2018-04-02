import React, { Component } from 'react';
import CssModules from 'react-css-modules';

import styles from './Detail.sass';

class Detail extends Component {
  constructor() {
    super();
    this.state = {
      detailCards: [
        { id: 1, title: 'Hello Title' },
      ],
    };
  }

  render() {
    return (
      <section id="detail" styleName="section">
        <h1>{this.state.detailCards.title}</h1>
        <p>Hello:</p>
      </section>
    );
  }
}

export default CssModules(Detail, styles);
