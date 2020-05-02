import React, { useRef, useState } from 'react';
import Burger from './Burger';
import Button from './Button';
import styles from './header-nav.scss';
import useOnClickOutside from './useOnClickOutside';

const HeaderNav = props => {
  const ref = useRef(null);
  const { children, label } = props;
  const [active, setActive] = useState(false);
  useOnClickOutside(ref, () => setActive(false));
  return (
    <nav aria-label={label} className={`${styles.nav} ${active ? styles.active : styles.inactive}`} ref={ref}>
      <div className={styles.control}>
        <Button aria-label={label} onClick={() => setActive(!active)}>
          <Burger />
        </Button>
      </div>
      <div>{children}</div>
    </nav>
  );
};

export default HeaderNav;
