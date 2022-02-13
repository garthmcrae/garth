import styles from "./eye.module.scss";

export default function Eye(props) {
  return (
    <button className={`${styles.socket}`} {...props}>
      <span className={styles.eye}>
        <span className={styles.pupil} />
        <span className={`${styles.left} ${styles.nimbus}`} />
        <span className={`${styles.right} ${styles.cumulus}`} />
      </span>
    </button>
  );
}
