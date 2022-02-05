import React from "react";
import styles from "./label.module.scss";

export function Label(props) {
  return <label className={styles.label} {...props} />;
}
