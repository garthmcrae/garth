import React, { useRef, useState } from 'react';
import styles from './draw.scss';
import Button from './Button';
import Burger from './Burger';
import useOnClickOutside from './useOnClickOutside';

const Draw = ({ children, controlStyle = {} }) => {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);
  useOnClickOutside(ref, () => setOpen(false));
  return (
    <div className={`${styles.container} ${open ? styles.active : styles.inactive}`} ref={ref}>
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
