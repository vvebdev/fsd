'use client';
import React, { useState } from 'react';
import { useTodos } from '@/shared/store/todos';
import styles from './styles.module.css';
import Button from '@/shared/ui-kit/button';
import Input from '@/shared/ui-kit/input';

const AddTodoForm = () => {
  const addTodo = useTodos((state) => state.add);
  const [todoTitle, setTodoTitle] = useState('');

  const handleSubmitForm = (event: React.FormEvent) => {
    event.preventDefault();
    addTodo(todoTitle);
  };

  return (
    <form onSubmit={handleSubmitForm} className={styles.wrapper}>
      <div className={styles.input}>
        <Input
          name="todo-title"
          onChange={(event) => setTodoTitle(event.target.value)}
        />
      </div>
      <div className={styles.button}>
        <Button type="submit">add todo</Button>
      </div>
    </form>
  );
};

export default AddTodoForm;
