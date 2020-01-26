import React from 'react';
import styles from './checkable.scss';

const Checkable = ({ children, id, name, inputRef, ...props }) => (
  <>
    <input className={styles.input} id={id} name={name} ref={inputRef} {...props} />
    <label className={styles.label} htmlFor={id}>
      {children}
    </label>
  </>
);

export default Checkable;
