import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Element',
    component: ()=>import(/* webpackChunkName: "404" */ "../views/notfind/index")
  },
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
