import Info from '../Info/Info';
import Card from '../Info/Card/Card';

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
