import React from "react";
import styles from "./paragraph.module.scss";

export function Paragraph({ element: Element = "p", ...props }) {
  return <Element className={styles.paragraph} {...props} />;
}
