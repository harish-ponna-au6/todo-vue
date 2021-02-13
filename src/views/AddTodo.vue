<template>
  <AddUpdateTodo :addTodo="addTodo" request='add' />
</template>

<script>
import AddUpdateTodo from "../components/AddUpdateTodo.vue";
export default {
  name: "AddTodo",
  props: ["todos", "addTodo"],
  components: { AddUpdateTodo },
  setup: (props) => {
    return { addTodo: props.addTodo };
  },
};
</script>

<style>
</style>