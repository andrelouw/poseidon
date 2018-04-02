import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';
import CssModules from 'react-css-modules';

import styles from './Landing.sass';

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      time: {},
      daysLeft: false,
    };
    this.tick = this.tick.bind(this);
    this.startTimer = this.startTimer.bind(this);
  }

  componentDidMount() {
    this.startTimer();
  }

  countDownDate = new Date('Aug 31, 2018 15:00:00').getTime();
  countDownTimer = 0;

  tick() {
    const now = new Date().getTime();
    const distance = this.countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    this.setState({
      time: {
        days,
        hours,
        minutes,
        seconds,
      },
    });

    if (distance < 0) {
      clearInterval(this.countDownTimer);
      this.setState({ daysLeft: false });
    }
  }

  startTimer() {
    if (this.countDownTimer === 0) {
      this.tick();
      this.countDownTimer = setInterval(this.tick, 1000);
      this.setState({ daysLeft: true });
    }
  }

  render() {
    let days;
    if (this.state.daysLeft && this.state.time.days) {
      days = <p styleName="timer">{this.state.time.days} dae oor!</p>;
    }

    return (
      <header styleName="header">
        <Container>
          <Row>
            <Col>
              <div styleName="landing">
                <div styleName="intro">
                  <h1>Dit is troutyd!</h1>
                  <p styleName="title">Armann & Micheline</p>
                  {days}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    );
  }
}

export default CssModules(Landing, styles);
