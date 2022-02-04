import React from "react";
import styles from "./checkable.module.scss";

export function Checkable({ children, id, inputRef, name, type, ...props }) {
  return (
    <div>
      <input
        className={styles.input}
        id={id}
        name={name}
        ref={inputRef}
        type={type}
        {...props}
      />
      <label className={styles.label} htmlFor={id}>
        {children}
      </label>
    </div>
  );
}
