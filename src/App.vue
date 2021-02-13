<template>
  <router-view
    :todos="todos"
    :addTodo="addTodo"
    :updateTodo="updateTodo"
    @delete="deleteTodo"
  />
</template>

<script>
import { ref } from "vue";
export default {
  name: "App",
  setup: () => {
    const todos = ref([
      {
        id: "fbca3a6c-5b4b-4868-88de-0734520f8193",
        title: "this is title one",
        text: "this is text one",
      },
      {
        id: "fbca3a6c-5b4b-4168-88de-0734270f8193",
        title: "this is title two",
        text: "this is text two",
      },
    ]);

    const addTodo = (todo) => todos.value.push(todo);
    const updateTodo = (updatedTodo) => {
      const index = todos.value.findIndex((todo) => todo.id === updatedTodo.id);
      todos.value.splice(index, 1, updatedTodo);
    };
    const deleteTodo = (id) =>
      (todos.value = todos.value.filter((todo) => todo.id !== id));

    return { todos, addTodo, updateTodo, deleteTodo };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
