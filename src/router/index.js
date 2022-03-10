import { createRouter, createWebHistory } from "vue-router";
import elementComponents from "./element";


const routes = [
  {
    path: "/login",
    name: "登录",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/login/index"),
  },
  {
    path: "/",
    name: "root",
    redirect: { path: "/element" },
  },
  {
    path: "/element",
    name: "Element",
    component: () =>
      import(/* webpackChunkName: "404" */ "../views/home/index"),
    children: [...elementComponents],
  },
  {
    path: '/:pathMatch(.*)',
    name: "not-Found",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/notfind/index"),
  }
];

const router = createRouter({
  "history": createWebHistory(),
  // base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  let username = localStorage.getItem("username");
  if (username !== "huangjin") {
    //没有登录
    if (to.path !== "/login") {
      next("./login");
    } else {
      next();
    }
  } else {
    if (to.path === "/login") {
      next("/");
    }
    next();
  }
});

export default router;
