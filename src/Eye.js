import styles from "./eye.module.scss";

export default function Eye(props) {
  return (
    <button className={styles.socket} {...props}>
      <span className={styles.eye}>
        <span className={styles.pupil} />
        <span className={styles.left} />
        <span className={styles.right} />
      </span>
    </button>
  );
}
