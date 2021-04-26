import React, { useState } from 'react';
import Button from './Button';
import Burger from './Burger';
import styles from './draw.scss';

const Draw = ({ children, controlStyle = {} }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`${styles.container} ${open ? styles.active : styles.inactive}`}>
      <div className={styles.control} style={controlStyle}>
        <Button onClick={_ => setOpen(!open)} type="button">
          <Burger />
        </Button>
      </div>
      <div className={styles.children}>{children}</div>
    </div>
  );
};

export default Draw;
