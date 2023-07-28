import React from 'react';
import style from './styles.module.css';

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

function Input({ ...extendProps }: InputProps) {
  return <input {...extendProps} className={style.field} />;
}

export default Input;
