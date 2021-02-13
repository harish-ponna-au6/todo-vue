<template>
  <AddUpdateTodo
    :todo="todo"
    :addTodo="addTodo"
    request="update"
    :updateTodo="updateTodo"
  />
</template>

<script>
import AddUpdateTodo from "../components/AddUpdateTodo.vue";
import { useRouter } from "vue-router";
export default {
  name: "UpdateTodo",
  props: ["todos", "addTodo"],
  components: { AddUpdateTodo },
  setup: (props) => {
    const router = useRouter();
    const { id } = router.currentRoute._value.params;
    const todo = props.todos.find((todo) => todo.id === id);
    return { todo, addTodo: props.addTodo, updateTodo: props.updateTodo };
  },
};
</script>

<style>
</style>