import Card from '../People/Card/Card';
import image from '../../assets/img/aj.png';

export default [
  {
    component: Card,
  },
  {
    component: Card,
    name: 'People Card',
    props: {
      name: 'Andre Louw',
      quote: 'Hello yello',
      image: image,  // eslint-disable-line
    },
  },
];
