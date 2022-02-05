import React from "react";
import styles from "./rule.module.scss";

export function Rule(props) {
  return <hr className={styles.rule} {...props} />;
}
