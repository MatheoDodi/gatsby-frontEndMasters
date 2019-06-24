const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/matthew/Documents/All-Projects/gatsby-frontEndMasters/.cache/dev-404-page.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/matthew/Documents/All-Projects/gatsby-frontEndMasters/src/pages/about.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/matthew/Documents/All-Projects/gatsby-frontEndMasters/src/pages/index.js"))),
  "component---src-pages-contact-mdx": hot(preferDefault(require("/Users/matthew/Documents/All-Projects/gatsby-frontEndMasters/src/pages/contact.mdx")))
}

