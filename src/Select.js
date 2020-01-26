import React, { Fragment, useRef, useState } from 'react';
import styles from './select.scss';
import useOnClickOutside from './useOnClickOutside';

const Select = props => {
  const ref = useRef(null);
  const [active, setActive] = React.useState(false);
  const [value, setValue] = React.useState('');
  const handleClick = event => {
    setActive(!active);
  };
  const handleFocus = event => {
    setValue(event.target.value);
  };
  const handleKeyPress = event => {
    if (event.key === ' ') {
      setActive(!active);
    }
  };
  useOnClickOutside(ref, () => setActive(false));
  const { inputRef, label = '', name = 'select', options = [] } = props;
  return (
    <div id={name} className={styles.select} ref={ref}>
      <div className={`${styles.options} ${active ? styles.active : styles.inactive}`}>
        {options.map((option, index) => {
          return (
            <Fragment key={`${name}-${index}`}>
              <input
                checked={value === option.value}
                id={`${name}-${index}`}
                name={name}
                onChange={handleFocus}
                onFocus={handleFocus}
                onKeyPress={handleKeyPress}
                ref={inputRef}
                type="radio"
                value={option.value}
              />
              <label htmlFor={`${name}-${index}`} onClick={handleClick}>
                {option.label}
              </label>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Select;
