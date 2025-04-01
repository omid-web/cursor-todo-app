<script setup lang="ts">
import { ref } from 'vue';
import TodoItem from '@/components/TodoItem.vue';
import { useTodoStore } from '@stores/todo';

const store = useTodoStore();
const newTodo = ref('');

const addTodo = () => {
  store.addTodo(newTodo.value);
  newTodo.value = '';
};
</script>

<template>
  <div class="min-h-screen py-8 px-4">
    <div class="max-w-2xl mx-auto">
      <h1 class="text-3xl font-bold text-center mb-8 text-gray-800">My Todo App 3</h1>
      
      <div class="mb-6">
        <form @submit.prevent="addTodo" class="flex gap-2">
          <input
            v-model="newTodo"
            type="text"
            placeholder="Add a new todo..."
            class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            type="submit"
            class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            Add
          </button>
        </form>
      </div>

      <div class="space-y-3">
        <TodoItem
          v-for="todo in store.todos"
          :key="todo.id"
          :todo="todo"
          @toggle="store.toggleTodo"
          @delete="store.deleteTodo"
        />
      </div>

      <div v-if="store.todos.length === 0" class="text-center text-gray-500 mt-8">
        No todos yet. Add one above!
      </div>
    </div>
  </div>
</template>
