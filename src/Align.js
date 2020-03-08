import React from 'react';
import styles from './align.scss';

const Align = ({ element: Element = 'span', ...props }) => <Element className={styles.align} {...props} />;

export default Align;
