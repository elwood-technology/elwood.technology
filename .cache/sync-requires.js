const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/travis/Repos/elwood.technology/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/travis/Repos/elwood.technology/src/pages/index.js"))),
  "component---src-pages-pizza-js": hot(preferDefault(require("/Users/travis/Repos/elwood.technology/src/pages/pizza.js"))),
  "component---src-pages-roundup-index-js": hot(preferDefault(require("/Users/travis/Repos/elwood.technology/src/pages/roundup/index.js"))),
  "component---src-templates-roundup-js": hot(preferDefault(require("/Users/travis/Repos/elwood.technology/src/templates/roundup.js")))
}

