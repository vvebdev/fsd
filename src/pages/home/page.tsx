'use client';
import Title from '@/shared/ui-kit/title';
import Todos from '@/widgets/todos';
import styles from './styles.module.css';

const Home = () => {
  return (
    <div className={styles.page}>
      <Title>TodoList home page</Title>
      <Todos />
    </div>
  );
};

export default Home;
