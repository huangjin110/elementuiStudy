const elementComponents = [
  {
    path: "button",
    name: "Button",
    component: () =>
      import(/* webpackChunkName: "button" */ "../views/button/index"),
  },
  {
    path: "link",
    name: "Link",
    component: () =>
      import(/* webpackChunkName: "link" */ "../views/link/index"),
  },
  {
    path: "form",
    name: "Form",
    component: () =>
      import(/* webpackChunkName: "form" */ "../views/form/index"),
    children: [
      {
        path: "radio",
        name: "Radio",
        component: () =>
          import(
            /* webpackChunkName: "radio" */ "../views/form/components/radio/index"
          ),
      },
    ],
  },
  {
    path: "transform",
    name: "transform",
    component: () =>
      import(/* webpackChunkName: "transform" */ "../views/transform/index"),
  },
  {
    path: "css",
    name: "css",
    component: () =>
      import(/* webpackChunkName: "transform" */ "../views/cssTest/index"),
  },
  {
    path: "canvas",
    name: "canvas",
    component: () =>
      import(/* webpackChunkName: "canvas" */ "../views/canvas/native/index"),
  },
  {
    path: "f2",
    name: "f2",
    component: () =>
      import(/* webpackChunkName: "f2" */ "../views/canvas/antv/f2/index"),
  },
  {
    path: "js",
    name: "jsdom",
    component: () =>
      import(/* webpackChunkName: "transform" */ "../views/js/index"),
  },
  
];

export default elementComponents