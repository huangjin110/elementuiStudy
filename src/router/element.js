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
            /* webpackChunkName: "form" */ "../views/form/components/radio/index"
          ),
      },
    ],
  },
];

export default elementComponents