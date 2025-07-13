import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface Todo {
  id: number
  text: string
  completed: boolean
  createdAt: Date
}

export const useTodoStore = defineStore('todo', () => {
  const todos = ref<Todo[]>([])
  const nextId = ref(1)

  const addTodo = (text: string) => {
    if (text.trim()) {
      todos.value.push({
        id: nextId.value++,
        text: text.trim(),
        completed: false,
        createdAt: new Date()
      })
    }
  }

  const toggleTodo = (id: number) => {
    const todo = todos.value.find(todo => todo.id === id)
    if (todo) {
      todo.completed = !todo.completed
    }
  }

  const deleteTodo = (id: number) => {
    const index = todos.value.findIndex(todo => todo.id === id)
    if (index > -1) {
      todos.value.splice(index, 1)
    }
  }

  const updateTodo = (id: number, text: string) => {
    const todo = todos.value.find(todo => todo.id === id)
    if (todo && text.trim()) {
      todo.text = text.trim()
    }
  }

  const clearCompleted = () => {
    todos.value = todos.value.filter(todo => !todo.completed)
  }

  const clearAll = () => {
    todos.value = []
    nextId.value = 1

  }

  const completedTodos = computed(() => 
    todos.value.filter(todo => todo.completed)
  )


  const totalTodos = computed(() => todos.value.length)

  // Test function to verify store is working
  const testStore = () => {
    console.log('Store test - todos:', todos.value)
    console.log('Store test - todos length:', todos.value.length)
  }

  return {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    updateTodo,
    clearCompleted,
    completedTodos,
    totalTodos,
    clearAll,
    testStore
  }
}) 