import React from "react";
import styles from "./anchor.module.scss";

export function Anchor({ element: Element = "a", ...props }) {
  return <Element className={styles.anchor} {...props} />;
}
