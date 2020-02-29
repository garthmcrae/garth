import React, { useRef, useState } from 'react';
import styles from './sidebar-nav.scss';
import useOnClickOutside from './useOnClickOutside';

const SidebarNav = props => {
  const ref = useRef(null);
  const { children, label } = props;
  const [active, setActive] = useState(false);
  useOnClickOutside(ref, () => setActive(false));
  return (
    <nav aria-label={label} className={`${styles.nav} ${active ? styles.active : styles.inactive}`} ref={ref}>
      <button aria-label="Menu" className={styles.bun} onClick={() => setActive(!active)}>
        <span className={styles.pickle} />
        <span className={styles.cheese} />
        <span className={styles.patty} />
      </button>
      <div>{children}</div>
    </nav>
  );
};

export default SidebarNav;