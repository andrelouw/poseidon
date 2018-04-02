import Detail from '../Detail/Detail';
import Card from '../Detail/Card/Card';

export default [
  {
    component: Detail,
  },
  {
    component: Card,
    name: 'Detail Card',
    props: {
      title: 'Heading',
      content: 'Content',
    },
  },
];
