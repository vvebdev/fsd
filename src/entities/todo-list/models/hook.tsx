import { useTodos as TodoListStore } from './store';

const useTodos = () => {
  const todos = TodoListStore((state) => state.todos);
  const addTodo = TodoListStore((state) => state.add);
  const deleteTodo = TodoListStore((state) => state.delete);
  return { todos, addTodo, deleteTodo };
};

export { useTodos };
