import React from "react";
import styles from "./layout.module.scss";

export function Layout(props) {
  return <div className={styles.layout} {...props} />;
}
