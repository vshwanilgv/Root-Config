import { registerApplication, start } from "single-spa";



registerApplication({
  name: "@my-org/product",
  app: () =>
    import(
      /* webpackIgnore: true */
      "@my-org/product"
    ),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
