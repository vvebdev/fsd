import React from 'react';
import styles from './styles.module.css';

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

function Button({ children, ...extendProps }: ButtonProps) {
  return (
    <button {...extendProps} className={styles.regular}>
      {children}
    </button>
  );
}

export default Button;
