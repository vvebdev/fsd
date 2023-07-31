import React from 'react';
import styles from './styles.module.css';

interface TodoListItemProps {
  children: React.ReactNode;
}

const TodoListItem = ({ children }: TodoListItemProps) => {
  return <li className={styles.item}>{children}</li>;
};

export { TodoListItem };
