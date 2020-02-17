import React, { useState } from 'react';
import styles from './sidebar-layout.scss';

const SidebarLayout = props => {
  const { children } = props;
  return <div className={styles.layout}>{children}</div>;
};

export default SidebarLayout;
