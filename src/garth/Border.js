import React from "react";
import styles from "./border.module.scss";

export function Border(props) {
  return <div className={styles.border} {...props} />;
}
