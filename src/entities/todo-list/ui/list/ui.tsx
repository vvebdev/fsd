import styles from './styles.module.css';
import { TodoItem } from '../item';
import { useTodos } from '../../models/store';

const TodoList = () => {
  const todos = useTodos((state) => state.todos);

  return (
    <ul className={styles.wrapper}>
      {todos.map((todo) => (
        <li className={styles.item} key={todo.id}>
          <TodoItem title={todo.title} />
        </li>
      ))}
    </ul>
  );
};

export { TodoList };
