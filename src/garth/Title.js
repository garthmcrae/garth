import React from "react";
import styles from "./title.module.scss";

export function Title({ element: Element = "h2", ...props }) {
  return <Element className={styles.title} {...props} />;
}
