import { create } from 'zustand';
import { Todo } from './types';

interface TodosState {
  todos: Todo[];
  add: (title: string) => void;
  delete: (id: number) => void;
}

export const useTodos = create<TodosState>((set) => ({
  todos: [],
  add: (title) =>
    set((state) => ({
      todos: [...state.todos, { id: state.todos.length + 1, title }],
    })),
  delete: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
}));
