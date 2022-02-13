import React from "react";
import styles from "./typography.module.scss";
import getStringArrayFromArrayOrInteger from "./getStringArrayFromArrayOrInteger";

export function Typography({ element: Element = "p", size = 1, ...props }) {
  const sizes = getStringArrayFromArrayOrInteger("size", size).map(
    (size) => styles[size]
  );
  const classList = [styles.typography, ...sizes];
  return <Element className={classList.join(" ")} {...props} />;
}
