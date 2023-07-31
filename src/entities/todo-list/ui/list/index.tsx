import styles from './styles.module.css';
import { Todo } from '../item';
import { useTodos } from '../../models/store';

export const TodoList = () => {
  const todos = useTodos((state) => state.todos);

  return (
    <ul className={styles.wrapper}>
      {todos.map((todo) => (
        <li className={styles.item} key={todo.id}>
          <Todo title={todo.title} />
        </li>
      ))}
    </ul>
  );
};
