import React from "react";
import styles from "./root.module.scss";

export function Root(props) {
  return <div className={styles.root} {...props} />;
}
