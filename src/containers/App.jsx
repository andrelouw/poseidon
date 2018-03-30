import React, { Component } from 'react';
import CssModules from 'react-css-modules';
import { Container, Row, Col, Button } from 'reactstrap';

import logo from '../logo.svg';
import styles from './App.scss';

// eslint-disable-next-line
class App extends Component {
  render() {
    return (
      <div styleName="App">
        <header styleName="header">
          <img src={logo} styleName="logo" alt="logo" />
          <h1 styleName="title">Welcome to React</h1>
        </header>
        <p styleName="intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Container>
          <Row>
            <Col md="3"><Button color="blue">Hello Button</Button></Col>
            <Col md="3">Hello1</Col>
            <Col md="3">Hello1</Col>
            <Col md="3">Hello1</Col>
          </Row>
        </Container>

      </div>
    );
  }
}

export default CssModules(App, styles);
