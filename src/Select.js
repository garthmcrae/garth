import React, { useState } from 'react';
import styles from './select.scss';

const Select = props => {
  const [active, setActive] = React.useState(false);
  const [value, setValue] = React.useState('');
  const handleBlur = event => null;
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
  const { label = '', name = 'select', options = [] } = props;
  return (
    <>
      <div>
        {label} {active ? 'true' : 'false'} {value}
      </div>
      <div id={name} className={styles.select}>
        <div className={`${styles.options} ${active ? styles.active : styles.inactive}`}>
          {options.map((option, index) => {
            const id = `${name}-${index}`;
            return (
              <React.Fragment key={option.value}>
                <input
                  checked={value === option.value}
                  id={id}
                  name={name}
                  onBlur={handleBlur}
                  onChange={handleFocus}
                  onFocus={handleFocus}
                  onKeyPress={handleKeyPress}
                  type="radio"
                  value={option.value}
                />
                <label htmlFor={id} onClick={handleClick}>
                  {option.label}
                </label>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Select;
