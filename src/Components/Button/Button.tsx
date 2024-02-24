import { forwardRef, ForwardRefRenderFunction } from 'react';
import styles from './Button.module.css';
import { ButtonProps } from './Button.props';

const Button: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  { textButton = 'Search', onClick, ...props }, 
  ref
) => {
  return (
    <button {...props} ref={ref} className={styles.button} onClick={onClick}>
      {textButton}
    </button>
  );
};

export default forwardRef(Button);
