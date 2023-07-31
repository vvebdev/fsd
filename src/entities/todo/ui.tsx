import React from 'react';
import styles from './style.module.css';
import { Card } from '@/shared/ui-kit/card';

interface TodoProps {
  title: string;
  children: React.ReactNode;
}

const Todo = ({ title, children }: TodoProps) => {
  return (
    <Card>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.slot}>{children}</div>
      </div>
    </Card>
  );
};

export { Todo };
