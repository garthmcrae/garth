import React from "react";
import styles from "./container.module.scss";

export function Container(props) {
  return <div className={styles.container} {...props} />;
}
