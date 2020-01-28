import React from 'react';
import styles from './checkable.scss';

const Checkable = ({ children, id, inputRef, name, ...props }) => {
  const { type } = props;
  console.log(styles[type]);
  return (
    <div>
      <input className={styles.input} id={id} name={name} ref={inputRef} {...props} />
      <label className={styles.label} htmlFor={id}>
        {children}
      </label>
    </div>
  );
};

export default Checkable;
