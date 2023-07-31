'use client';
import React, { useState } from 'react';
import { useTodos } from '@/entities/todo-list/models/store';
import styles from './styles.module.css';
import Button from '@/shared/ui-kit/button';
import Input from '@/shared/ui-kit/input';

export const AddTodoForm = () => {
  const addTodo = useTodos((state) => state.add);
  const [todoTitle, setTodoTitle] = useState('');

  const handleSubmitForm = (event: React.FormEvent) => {
    event.preventDefault();
    addTodo(todoTitle);
    setTodoTitle('');
  };

  return (
    <form onSubmit={handleSubmitForm} className={styles.wrapper}>
      <div className={styles.input}>
        <Input
          type="text"
          onChange={(event) => setTodoTitle(event.target.value)}
          value={todoTitle}
        />
      </div>
      <div className={styles.button}>
        <Button type="submit" disabled={!todoTitle}>
          add todo
        </Button>
      </div>
    </form>
  );
};
