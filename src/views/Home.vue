<template>
  <div class="container">
    <div class="header">All Todos</div>
    <div class="body">
      <router-link to="/add-todo"
        ><div class="new-task">+ New Task</div></router-link
      >
      <div class="all-todos">
        <div v-for="todo in todos" :key="todo.id" class="todo">
          <router-link :to="{ name: 'UpdateTodo', params: { id: todo.id } }">
            <p>{{ todo.title }}</p>
          </router-link>
          <img
            src="@/assets/delete.png"
            height="20"
            @click="deleteTodo(todo.id)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: ["todos"],
  setup: (props, { emit }) => {
    const deleteTodo = (id) => {
      emit("delete", id);
    };
    return { deleteTodo };
  },
};
</script>


<style>
.container {
  width: 500px;
  min-height: 500px;
}
.todo p {
  width: 400px;
  display: flex;
  justify-content: flex-start;
  padding: 10px;
  color: #181818d7;
}
.header {
  background: #af7eeb;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f6f6f6;
  font-weight: 700;
  margin-bottom: 40px;
}

.body {
  background: #f6f6f6;
  position: relative;
  border-radius: 5px;
  padding: 10px;
  min-height: 200px;
}

.new-task {
  position: absolute;
  background: #af7eeb;
  top: -20px;
  height: 40px;
  left: 150px;
  width: 200px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f6f6f6;
  font-weight: 600;
}

.new-task:hover{
  box-shadow: 2px 4px 10px -2px rgba(0, 0, 0, 0.61);
  -webkit-box-shadow: 2px 4px 10px -2px rgba(0, 0, 0, 0.61);
  -moz-box-shadow: 2px 4px 10px -2px rgba(0, 0, 0, 0.61);
}

.todo {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

a {
  text-decoration: none;
}
img {
  cursor: pointer;
}
</style>