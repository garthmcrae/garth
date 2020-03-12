import React, { useState } from 'react';
import styles from './footer.scss';

const Footer = props => {
  const { children } = props;
  return (
    <footer className={styles.footer}>
      <span>{children}</span>
    </footer>
  );
};

export default Footer;
