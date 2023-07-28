import { create } from 'zustand';
import { Todos } from '@/shared/api/todos';

interface TodosState {
  todos: { id: number; title: string }[];
  add: (title: string) => void;
}

export const useTodos = create<TodosState>((set) => ({
  todos: Todos,
  add: (title) =>
    set((state) => ({
      todos: [...state.todos, { id: state.todos.length + 1, title }],
    })),
}));
