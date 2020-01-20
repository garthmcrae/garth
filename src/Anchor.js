import React from 'react';
import styles from './anchor.scss';

const Anchor = ({ element: Element = 'a', ...props }) => <Element className={styles.anchor} {...props} />;

export default Anchor;
