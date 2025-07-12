<template>
  <div class="todo-item" :class="{ completed: todo.completed }">
    <div class="todo-content">
      <input
        type="checkbox"
        :checked="todo.completed"
        @change="toggleTodo"
        class="todo-checkbox"
      />
      <input
        v-if="isEditing"
        v-model="editText"
        @blur="saveEdit"
        @keyup.enter="saveEdit"
        @keyup.esc="cancelEdit"
        ref="editInput"
        class="todo-edit-input"
      />
      <span
        v-else
        @dblclick="startEdit"
        class="todo-text"
      >
        {{ todo.text }}
      </span>
    </div>
    <button @click="deleteTodo" class="delete-btn">
      ×
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'
import type { Todo } from '@/stores/todo'

interface Props {
  todo: Todo
}

interface Emits {
  (e: 'toggle', id: number): void
  (e: 'delete', id: number): void
  (e: 'update', id: number, text: string): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const isEditing = ref(false)
const editText = ref('')
const editInput = ref<HTMLInputElement>()

const toggleTodo = () => {
  emit('toggle', props.todo.id)
}

const deleteTodo = () => {
  emit('delete', props.todo.id)
}

const startEdit = () => {
  isEditing.value = true
  editText.value = props.todo.text
  nextTick(() => {
    editInput.value?.focus()
  })
}

const saveEdit = () => {
  if (editText.value.trim() && editText.value !== props.todo.text) {
    emit('update', props.todo.id, editText.value)
  }
  isEditing.value = false
}

const cancelEdit = () => {
  isEditing.value = false
  editText.value = props.todo.text
}
</script>

<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: white;
  border-radius: 8px;
  margin-bottom: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
}

.todo-item:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.todo-item.completed {
  opacity: 0.6;
}

.todo-content {
  display: flex;
  align-items: center;
  flex: 1;
  gap: 12px;
}

.todo-checkbox {
  width: 18px;
  height: 18px;
  cursor: pointer;
}

.todo-text {
  flex: 1;
  font-size: 16px;
  color: #333;
  cursor: pointer;
  word-break: break-word;
}

.todo-item.completed .todo-text {
  text-decoration: line-through;
  color: #888;
}

.todo-edit-input {
  flex: 1;
  font-size: 16px;
  padding: 4px 8px;
  border: 2px solid #007bff;
  border-radius: 4px;
  outline: none;
}

.delete-btn {
  background: #ff4757;
  color: white;
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;
}

.delete-btn:hover {
  background: #ff3742;
}
</style> 