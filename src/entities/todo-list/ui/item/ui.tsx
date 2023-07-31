import { Card } from '@/shared/ui-kit/card';
import styles from './style.module.css';

interface TodoProps {
  title: string;
}

export const Todo = ({ title }: TodoProps) => {
  return (
    <Card>
      <h3 className={styles.title}>{title}</h3>
    </Card>
  );
};
