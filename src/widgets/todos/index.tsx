import { TodoList } from '@/entities/todo-list';
import { AddTodoForm } from '@/features/add-todo-form';

function Todos() {
  return (
    <>
      <AddTodoForm />
      <TodoList />
    </>
  );
}

export default Todos;
