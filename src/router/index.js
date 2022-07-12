import { createRouter, createWebHashHistory } from "vue-router";
import homePage from "../views/home-page.vue";
import aboutPage from "../views/about-page.vue";
import taskDetails from "../views/task-details.vue";
import taskEdit from "../views/task-edit.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: homePage,
  },
  {
    path: "/about",
    name: "about",
    component: aboutPage,
  },
  {
    path: "/task/:taskId",
    name: "details",
    component: taskDetails,
  },
  {
    path: "/task/edit/:taskId",
    name: "edit",
    component: taskEdit,
  },
  // {
  //   path: "/register",
  //   name: "register",
  //   component: registerPage,
  // },
  // {
  //   path: "/login",
  //   name: "login",
  //   component: loginPage,
  // },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
