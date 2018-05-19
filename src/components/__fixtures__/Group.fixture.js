import Group from '../People/Group/Group';
import image from '../../assets/img/aj.png';

export default [
  {
    component: Group,
  },
  {
    component: Group,
    name: 'Group',
    props: {
      heading: 'Ramkamp',
      cards: [
        {
          key: 1,
          name: 'Andre Louw',
          quote: 'Hello yello',
          image: image,  // eslint-disable-line
        },
        {
          key: 2,
          name: 'Andre Louw',
          quote: 'Hello yello',
          image: image,  // eslint-disable-line
        },
        {
          key: 3,
          name: 'Andre Louw',
          quote: 'Hello yello',
          image: image,  // eslint-disable-line
        },
      ],
    },
  },
];
