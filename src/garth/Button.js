import React from "react";
import styles from "./button.module.scss";

export function Button({ element: Element = "button", ...props }) {
  return <Element className={styles.button} {...props} />;
}
