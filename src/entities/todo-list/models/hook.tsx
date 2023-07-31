import { useTodos as TodoListStore } from './store';

const useTodos = () => {
  const addTodo = TodoListStore((state) => state.add);
  return { addTodo };
};

export { useTodos };
