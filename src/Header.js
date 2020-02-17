import React, { useState } from 'react';
import styles from './header.scss';

const Header = props => {
  const { children, label } = props;
  return (
    <header className={styles.header} role="banner" aria-label={label}>
      <span className={styles.brand}>{children}</span>
    </header>
  );
};

export default Header;
