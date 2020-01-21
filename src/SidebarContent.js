import React, { useState } from 'react';
import styles from './sidebar.scss';

const SidebarContent = props => {
  const { children } = props;
  return <main className={styles.main}>{children}</main>;
};

export default SidebarContent;
