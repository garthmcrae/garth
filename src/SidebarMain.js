import React, { useState } from 'react';
import styles from './sidebar-main.scss';

const SidebarMain = props => {
  const { children } = props;
  return <main className={styles.main}>{children}</main>;
};

export default SidebarMain;
