import { Card } from '@/shared/ui-kit/card';
import styles from './style.module.css';

interface TodoItemProps {
  title: string;
}

const TodoItem = ({ title }: TodoItemProps) => {
  return (
    <Card>
      <h3 className={styles.title}>{title}</h3>
    </Card>
  );
};

export { TodoItem };
