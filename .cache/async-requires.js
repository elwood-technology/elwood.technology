// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-pizza-js": () => import("./../../../src/pages/pizza.js" /* webpackChunkName: "component---src-pages-pizza-js" */),
  "component---src-pages-roundup-index-js": () => import("./../../../src/pages/roundup/index.js" /* webpackChunkName: "component---src-pages-roundup-index-js" */),
  "component---src-templates-roundup-js": () => import("./../../../src/templates/roundup.js" /* webpackChunkName: "component---src-templates-roundup-js" */)
}

