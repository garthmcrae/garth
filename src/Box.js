import React from 'react';
import styles from './box.scss';

const Box = ({ children, element: Element = 'div', fluid, solid, adaptive, width, ...props }) => {
  const classList = [styles.box];
  adaptive && classList.push(styles.adaptive);
  fluid && classList.push(styles.fluid);
  solid && classList.push(styles.solid);
  width && classList.push(styles[`width-${width}`]);
  return (
    <Element className={classList.join(' ')} {...props}>
      {children}
    </Element>
  );
};

export default Box;
