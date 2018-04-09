import Info from '../Info/Info';
import Card from '../shared/Card/Card';

export default [
  {
    component: Info,
  },
  {
    component: Card,
    name: 'Info Card',
    props: {
      title: 'Heading',
      content: 'Content',
    },
  },
];
