import { registerApplication, start } from "single-spa";



registerApplication({
  name: "@my-org/navbar",
  app: () =>
    import(
      /* webpackIgnore: true */
      "@my-org/navbar"
    ),
  activeWhen: ["/"],
});

registerApplication({
  name: "@my-org/styleguide",
  app: () =>
    import(
      /* webpackIgnore: true */
      "@my-org/styleguide"
    ),
  activeWhen: ["/"],
});

registerApplication({
  name: "@my-org/product",
  app: () =>
    import(
      /* webpackIgnore: true */
      "@my-org/product"
    ),
  activeWhen: ["/"],
});

registerApplication({
  name: "@my-org/home",
  app: () =>
    import(
      /* webpackIgnore: true */
      "@my-org/home"
    ),
  activeWhen: ["/"],
});

registerApplication({
  name: "@my-org/user",
  app: () =>
    import(
      /* webpackIgnore: true */
      "@my-org/user"
    ),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
