import styles from './styles.module.css';
import Todo from '@/entities/todo';
import { useTodos } from '@/shared/store/todos';

function TodoList() {
  const todos = useTodos((state) => state.todos);
  // const countIncrement = useCounter((state) => state.increment);
  // const setCount = useCounter((state) => state.setCount);

  return (
    <ul className={styles.wrapper}>
      {todos.map((todo) => (
        <li className={styles.item} key={todo.id}>
          <Todo title={todo.title} />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
