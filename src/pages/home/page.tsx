'use client';
import styles from './styles.module.css';
import AddTodoForm from '@/features/add-todo-form';
import PageTitle from '@/shared/ui-kit/page-title';
import TodoList from '@/widgets/todo-list';

const Home = () => {
  return (
    <div className={styles.page}>
      <PageTitle>TodoList home page</PageTitle>
      <AddTodoForm />
      <TodoList />
    </div>
  );
};

export default Home;
