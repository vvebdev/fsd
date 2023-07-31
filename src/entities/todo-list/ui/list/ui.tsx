import React from 'react';
import styles from './styles.module.css';

interface TodoListProps {
  children: React.ReactNode;
}

const TodoList = ({ children }: TodoListProps) => {
  return (
    <>
      <ul className={styles.list}>{children}</ul>
    </>
  );
};

export { TodoList };
