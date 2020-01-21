import React, { useState } from 'react';
import styles from './footer.scss';

const Footer = props => {
  const { children } = props;
  return (
    <footer className={styles.footer}>
      <span className={styles.copy}>{children}</span>
    </footer>
  );
};

export default Footer;
