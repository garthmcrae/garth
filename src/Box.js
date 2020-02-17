import React from 'react';
import styles from './box.scss';

const Box = ({ width, ...props }) => {
  const classList = width ? `${styles.box} ${styles[`width-${width}`]}` : styles.box;
  return <div className={classList} {...props} />;
};

export default Box;
