module.exports = {
  siteMetadata: {
    title: "Frontend Masters Gatsby Workshop",
    description:
      "A site built while following the Gatsby workshop on Frontend Masters"
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/layout.js")
        }
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: "posts"
      }
    }
  ]
};
