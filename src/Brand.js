import React from 'react';
import styles from './brand.scss';

const Anchor = ({ element: Element = 'a', ...props }) => <Element className={styles.brand} {...props} />;

export default Anchor;
