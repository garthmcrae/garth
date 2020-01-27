import React, { useRef, useState } from 'react';
import styles from './sidebar.scss';
import useOnClickOutside from './useOnClickOutside';

const SidebarMenu = props => {
  const ref = useRef(null);
  const { children } = props;
  const [active, setActive] = useState(false);
  useOnClickOutside(ref, () => setActive(false));
  return (
    <aside className={`${styles.aside} ${active ? styles.active : styles.inactive}`} ref={ref}>
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
