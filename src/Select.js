import React, { Fragment, useRef } from 'react';
import styles from './select.scss';
import useOnClickOutside from './useOnClickOutside';

const Select = props => {
  const ref = useRef(null);
  const [active, setActive] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const [value, setValue] = React.useState('');
  const handleBlur = event => {
    setFocus(false);
  };
  const handleClick = event => {
    setActive(!active);
  };
  const handleFocus = event => {
    setFocus(true);
    setValue(event.target.value);
  };
  const handleKeyPress = event => {
    if (event.key === ' ') {
      setActive(!active);
    }
  };
  useOnClickOutside(ref, () => setActive(false));
  const { disabled, name = 'select', options = [] } = props;
  return (
    <div id={name} className={styles.select} ref={ref}>
      <div className={`${styles.options} ${active ? styles.active : styles.inactive} ${focus && styles.focus}`}>
        {options.map((option, index) => {
          return (
            <Fragment key={`${name}-${index}`}>
              <input
                disabled={disabled}
                onBlur={handleBlur}
                onChange={handleFocus}
                onFocus={handleFocus}
                onKeyPress={handleKeyPress}
                id={`${name}-${index}`}
                name={name}
                type="radio"
                value={option.value}
                {...option.props}
              />
              {/* <input
                {...option.props}
              /> */}
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
