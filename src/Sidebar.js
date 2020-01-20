import React, { useState } from 'react';
import styles from './sidebar.scss';

const Sidebar = props => {
  const { children } = props;
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};

export default Sidebar;
