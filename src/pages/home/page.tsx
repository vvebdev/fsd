'use client';
import { AddTodoForm } from '@/features/add-todo-form';
import styles from './styles.module.css';
import Title from '@/shared/ui-kit/title';
import TodoList from '@/widgets/todo-list';

const Home = () => {
  return (
    <div className={styles.page}>
      <Title>TodoList home page</Title>
      <AddTodoForm />
      <TodoList />
    </div>
  );
};

export default Home;
