import styles from './style.module.css';

interface TodoProps {
  title: string;
}

function Todo({ title }: TodoProps) {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
}

export default Todo;
