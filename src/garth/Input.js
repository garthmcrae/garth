import React from "react";
import styles from "./input.module.scss";

export function Input({ inputRef, ...props }) {
  return <input className={styles.input} ref={inputRef} {...props} />;
}
