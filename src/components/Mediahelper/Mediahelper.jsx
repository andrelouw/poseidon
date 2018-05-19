
import React from 'react';
import CssModules from 'react-css-modules';

import styles from './Mediahelper.sass';

const mediahelper = () => (
  <div styleName="media-helper" />
);

export default CssModules(mediahelper, styles);
