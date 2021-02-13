import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddTodo from '../views/AddTodo.vue'
import UpdateTodo from '../views/UpdateTodo.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add-todo',
    name: 'AddTodo',
    component: AddTodo
  },
  {
    path: '/update-todo/:id',
    name: 'UpdateTodo',
    component: UpdateTodo
  },
  
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
