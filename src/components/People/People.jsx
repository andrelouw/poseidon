import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from 'reactstrap';

import Group from './Group/Group';
import styles from './People.sass';

import aj from '../../assets/img/aj.png';
import dewald from '../../assets/img/dewald.png';
import jandre from '../../assets/img/jandre.png';
import pieter from '../../assets/img/pieter.png';
import michelle from '../../assets/img/michelle.png';
import bianca from '../../assets/img/bianca.png';
import alta from '../../assets/img/alta.png';
import brigitte from '../../assets/img/brigitte.png';

const peopleGroups = [
  {
    key: 1,
    heading: 'Ramkamp',
    cards: [
      {
        key: 1,
        name: 'AJ Meyer',
        quote: 'Comrades AJ \n hy het al die comrades gedoen en hy is ’n yster',
        image: aj,
      },
      {
        key: 2,
        name: 'Dewald Steyl',
        quote: '"Mr Sky" He never goes out of style',
        image: dewald,
      },
      {
        key: 3,
        name: 'Jandré Reynecke',
        quote: 'Bass brother from the same mother',
        image: jandre,
      },
      {
        key: 4,
        name: 'Pieter Reynecke',
        quote: 'Broer brother from another mother, letterlik',
        image: pieter,
      },
    ],
  },
  {
    key: 2,
    heading: 'Team Bride',
    cards: [
      {
        key: 1,
        name: 'Michelle Evert',
        quote: 'Me-shell (skilpad animation/img)',
        image: michelle,
      },
      {
        key: 2,
        name: 'Bianca Steyl',
        quote: 'Sy het onlangs styl gekry',
        image: bianca,
      },
      {
        key: 3,
        name: 'Alta Maartens',
        quote: 'America\'s sweetheart',
        image: alta,
      },
      {
        key: 4,
        name: 'Brigitte Louw',
        quote: 'Louw maar nie flou nie',
        image: brigitte,
      },
    ],
  },
];

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      peopleGroups: peopleGroups,  // eslint-disable-line
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex ===
    this.state.peopleGroups.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex ===
    0 ? this.state.peopleGroups.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = this.state.peopleGroups.map((item) => { // eslint-disable-line
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.key}
          // cssModule={styles}
        >
          <Group
            heading={item.heading}
            cards={item.cards}
          />
        </CarouselItem>
      );
    });

    return (
      <section>
        <h1>Carousel</h1>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators
            items={this.state.peopleGroups}
            activeIndex={activeIndex}
            onClickHandler={this.goToIndex}
            cssModule={styles}
          />
          {slides}

        </Carousel>
      </section>
    );
  }
}

export default Example;
