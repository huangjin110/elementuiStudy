import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: '/',
  //   name: 'Root',
  //   component: () => import(/* webpackChunkName: "home" */ '../views/home/index.vue')
  // },
  {
    path: "/button",
    name: "Button",
    component: () =>
      import(/* webpackChunkName: "button" */ "../views/button/index"),
  },
  {
    path: "/link",
    name: "Link",
    component: () =>
      import(/* webpackChunkName: "link" */ "../views/link/index"),
  },
  {
    path: "/form",
    name: "Form",
    component: () =>
      import(/* webpackChunkName: "form" */ "../views/form/index"),
    children: [
      {
        path: "radio",
        name: "Radio",
        component: () =>
          import(
            /* webpackChunkName: "form" */ "../views/form/components/radio/index"
          ),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
