import React from 'react';
import styles from './checkable.scss';

const Checkable = ({ children, id, name, ...props }) => (
  <>
    <input className={styles.input} id={id} name={name} {...props} />
    <label className={styles.label} htmlFor={id}>
      {children}
    </label>
  </>
);

export default Checkable;
