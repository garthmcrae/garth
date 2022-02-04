import React from "react";
import styles from "./flex.module.scss";

export function Flex({ element: Element = "div", wrap, ...props }) {
  const classList = [styles.flex];
  wrap && classList.push(styles.wrap);
  ["ol", "ul"].includes(Element) && classList.push(styles.list);
  return <div className={classList.join(" ")} {...props} />;
}
