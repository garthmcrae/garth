import React, { useState } from 'react';
import styles from './header.scss';

const Header = props => {
  const { children } = props;
  return (
    <header className={styles.header}>
      <span className={styles.brand}>{children}</span>
    </header>
  );
};

export default Header;
