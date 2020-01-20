import React, { useState } from 'react';
import styles from './sidebar.scss';

const SidebarMenu = props => {
  const { children } = props;
  const [active, setActive] = useState(false);
  return (
      <aside className={`${styles.aside} ${active ? styles.active : styles.inactive}`}>
        <button aria-label="Menu" className={styles.control} onClick={() => setActive(!active)} />
        <nav>{children}</nav>
      </aside>
  );
};

export default SidebarMenu;
