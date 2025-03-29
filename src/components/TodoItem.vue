<script setup lang="ts">
import type { Todo } from '@/types/todo';

interface Props {
  /** The todo item to display */
  todo: Todo;
}

interface Emits {
  /** Emitted when the todo completion status is toggled */
  (e: 'toggle', id: number): void;
  /** Emitted when the todo is deleted */
  (e: 'delete', id: number): void;
}

defineProps<Props>();
defineEmits<Emits>();
</script>

<template>
  <div class="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
    <input
      type="checkbox"
      :checked="todo.completed"
      @change="$emit('toggle', todo.id)"
      class="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
    />
    <span
      :class="[
        'flex-1 text-gray-800',
        todo.completed ? 'line-through text-gray-400' : ''
      ]"
    >
      {{ todo.text }}
    </span>
    <button
      @click="$emit('delete', todo.id)"
      class="text-red-500 hover:text-red-700 transition-colors"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
  </div>
</template> 