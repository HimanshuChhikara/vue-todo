<template>
  <div class="todo-container">
    <div class="todo-header">
      <h1>Todo App</h1>
    </div>

    <div class="todo-input-container">
      <input
        v-model="newTodo"
        @keyup.enter="addTodo"
        class="todo-input"
        ref="todoInput"
      />
      <button @click="addTodo" class="add-btn">
        Add
      </button>
    </div>

    <div v-if="todos.length > 0" class="todo-list">
      <TodoItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @toggle="toggleTodo"
        @delete="deleteTodo"
        @update="updateTodo"
      />
    </div>

    <div v-else class="empty-state">
      <p>No todos yet. Add one above!</p>
    </div>

    <div v-if="todos.length > 0" class="todo-footer">
      <div class="todo-stats">
        <span v-if="completedTodos.length > 0">{{ completedTodos.length }} completed</span>
        <span>{{ todos.length }} total</span>
      </div>
      <div class="clear-buttons">
        <button
          v-if="completedTodos.length > 0"
          @click="clearCompleted"
          class="clear-btn"
        >
          Clear completed
        </button>
        <button
          @click="clearAll"
          class="clear-all-btn"
        >
          Clear all
        </button>
        <button
          @click="testStore"
          style="margin-left: 10px; background: #28a745; color: white; border: none; padding: 5px 10px; border-radius: 4px;"
        >
          Test Store
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'
import { useTodoStore } from '@/stores/todo'
import TodoItem from './TodoItem.vue'

const todoStore = useTodoStore()
const newTodo = ref('')
const todoInput = ref<HTMLInputElement>()

const { todos, addTodo: storeAddTodo, toggleTodo: storeToggleTodo, deleteTodo: storeDeleteTodo, updateTodo: storeUpdateTodo, clearCompleted, clearAll: storeClearAll, completedTodos, testStore: storeTestStore } = todoStore

const addTodo = () => {
  if (newTodo.value.trim()) {
    storeAddTodo(newTodo.value)
    newTodo.value = ''
    nextTick(() => {
      todoInput.value?.focus()
    })
  }
}

const toggleTodo = (id: number) => {
  storeToggleTodo(id)
}

const deleteTodo = (id: number) => {
  storeDeleteTodo(id)
}

const updateTodo = (id: number, text: string) => {
  storeUpdateTodo(id, text)
}

const clearAll = () => {
  console.log('clearAll button clicked')
  storeClearAll()
}

const testStore = () => {
  console.log('Testing store...')
  storeTestStore()
}
</script>

<style scoped>
.todo-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.todo-header {
  text-align: center;
  margin-bottom: 32px;
}

.todo-header h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 8px;
  font-weight: 700;
}

.subtitle {
  color: #7f8c8d;
  font-size: 1.1rem;
  margin: 0;
}

.todo-input-container {
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
}

.todo-input {
  flex: 1;
  padding: 12px 16px;
  border: 2px solid #e1e8ed;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.2s ease;
}

.todo-input:focus {
  border-color: #007bff;
}

.add-btn {
  padding: 12px 24px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.add-btn:hover:not(:disabled) {
  background: #0056b3;
}

.add-btn:disabled {
  background: #ccc;
  cursor: not-allowed;
}

.todo-list {
  margin-bottom: 24px;
}

.empty-state {
  text-align: center;
  padding: 40px 20px;
  color: #7f8c8d;
}

.empty-icon {
  font-size: 3rem;
  margin-bottom: 16px;
}

.todo-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-top: 1px solid #e1e8ed;
}

.todo-stats {
  display: flex;
  gap: 16px;
  color: #7f8c8d;
  font-size: 14px;
}

.clear-buttons {
  display: flex;
  gap: 12px;
}

.clear-btn {
  background: none;
  border: none;
  color: #ff4757;
  cursor: pointer;
  font-size: 14px;
  text-decoration: underline;
  transition: color 0.2s ease;
}

.clear-btn:hover {
  color: #ff3742;
}

.clear-all-btn {
  background: none;
  border: none;
  color: #dc3545;
  cursor: pointer;
  font-size: 14px;
  text-decoration: underline;
  transition: color 0.2s ease;
  font-weight: 600;
}

.clear-all-btn:hover {
  color: #c82333;
}
</style> 