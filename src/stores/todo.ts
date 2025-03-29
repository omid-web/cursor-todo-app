import { defineStore } from 'pinia';
import type { Todo } from '@/types/todo';

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: [] as Todo[],
  }),
  
  actions: {
    addTodo(text: string) {
      if (!text.trim()) return;
      
      const todo: Todo = {
        id: Date.now(),
        text: text.trim(),
        completed: false,
        createdAt: new Date(),
      };
      
      this.todos.push(todo);
    },
    
    toggleTodo(id: number) {
      const todo = this.todos.find(t => t.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    
    deleteTodo(id: number) {
      this.todos = this.todos.filter(t => t.id !== id);
    },
  },
}); 