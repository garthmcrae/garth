import React from 'react';
import styles from './cell.scss';

const Cell = ({ span, ...props }) => {
  const classList = span ? `${styles.cell} ${styles[`cell-${span}`]}` : styles.cell;
  return <div className={classList} {...props} />;
};

export default Cell;
