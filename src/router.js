import Vue from "vue";
import Router from "vue-router";
import ToDo from "./modules/todo/pages/todo.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "todo",
      component: ToDo
    }
  ]
});
