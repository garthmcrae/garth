import React, { useState } from 'react';
import styles from './sidebar.scss';

const SidebarMenu = props => {
  const { children } = props;
  const [active, setActive] = useState(false);
  return (
    <aside className={`${styles.aside} ${active ? styles.active : styles.inactive}`}>
      <button aria-label="Menu" className={styles.bun} onClick={() => setActive(!active)}>
        <span className={styles.pickle} />
        <span className={styles.cheese} />
        <span className={styles.patty} />
      </button>
      <nav>{children}</nav>
    </aside>
  );
};

export default SidebarMenu;
