import { graphql, useStaticQuery } from "gatsby";

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
            slug
            author
          }
          excerpt
        }
      }
    }
  `);

  return data.allMdx.nodes.map(({ frontmatter, excerpt }) => ({
    title: frontmatter.title,
    author: frontmatter.author,
    slug: frontmatter.slug,
    excerpt: excerpt
  }));
};

export default usePosts;
