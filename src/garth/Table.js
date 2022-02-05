import React from "react";
import styles from "./table.module.scss";

export function Table(props) {
  return (
    <div className={styles.container}>
      <table className={styles.table} {...props} />
    </div>
  );
}
