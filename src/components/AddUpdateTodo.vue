<template>
  <div class="container">
    <div class="header">{{ header }}</div>
    <div class="body">
      <form @submit.prevent="submit">
        <input
          autofocus
          type="text"
          v-model="title"
          placeholder="Enter Title of the todo"
          required
        />
        <br />
        <br />
        <textarea
          required
          cols="30"
          rows="10"
          v-model="text"
          placeholder="Enter Text of the todo"
        ></textarea>
        <br />
        <br />
        <button>{{ btn }}</button>
      </form>
    </div>
  </div>
</template>

<script>
import { v4 as uuid } from "uuid";
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "AddUpdateTodo",
  props: ["todo", "addTodo", "updateTodo", "request"],
  setup: (props) => {
    const btn = props.todo?.id ? "Update" : "Submit";
    const header = props.todo?.id ? "Update Todo" : "Add Todo";
    let { id = uuid(), title = "", text = "" } = props.todo || {};
    const router = useRouter();
    title = ref(title);
    text = ref(text);

    const submit = () => {
      if (props.request === "add") props.addTodo({ id, title, text });
      else props.updateTodo({ id, title, text });
      router.push({ path: "/" });
    };

    return { id, text, title, submit, btn, header };
  },
};
</script>

<style>
input,
textarea {
  width: 100%;
  font-size: 16px;
  border: #af7eeb86 1px solid;
  padding: 5px;
  color: #000000af;
}
input:focus,
textarea:focus {
  outline: #af7eeb 1px solid;
}
button {
  padding: 5px 15px;
  border-radius: 2px;
  cursor: pointer;
  background: #af7eeb;
  border: none;
  color: #f6f6f6;
}

button:hover {
box-shadow: 2px 4px 10px -2px rgba(0,0,0,0.61);
-webkit-box-shadow: 2px 4px 10px -2px rgba(0,0,0,0.61);
-moz-box-shadow: 2px 4px 10px -2px rgba(0,0,0,0.61);
}
</style>