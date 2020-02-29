import React from 'react';
import styles from './table.scss';

const Table = props => (
  <div style={{ overflow: 'auto' }}>
    <table className={styles.table} {...props} />
  </div>
);

export default Table;
