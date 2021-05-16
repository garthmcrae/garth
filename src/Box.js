import React from 'react';
import styles from './box.scss';

const Box = ({ adaptive, children, element: Element = 'div', fluid, passive, solid, width, ...props }) => {
  const classList = [styles.box];
  adaptive && classList.push(styles.adaptive);
  fluid && classList.push(styles.fluid);
  passive ? classList.push(styles.passive) : classList.push(styles.assertive);
  solid && classList.push(styles.solid);
  width && classList.push(styles[`width-${width}`]);
  return (
    <Element className={classList.join(' ')} {...props}>
      {children}
    </Element>
  );
};

export default Box;
