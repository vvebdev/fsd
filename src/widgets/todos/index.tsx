import { AddTodoForm } from '@/features/add-todo-form';
import {
  useTodos,
  TodoList,
  TodoListItem,
} from '@/entities/todo-list';
import { Todo } from '@/entities/todo';
import { DeleteTodoButton } from '@/features/delete-todo-button';

function Todos() {
  const todos = useTodos((state) => state.todos);
  return (
    <>
      <AddTodoForm />
      <TodoList>
        {todos.map((el) => (
          <TodoListItem key={el.id}>
            <Todo title={el.title}>
              <DeleteTodoButton id={el.id} />
            </Todo>
          </TodoListItem>
        ))}
      </TodoList>
    </>
  );
}

export default Todos;
