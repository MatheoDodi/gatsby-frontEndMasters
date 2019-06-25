import React from "react";
import { graphql } from "gatsby";
import { css } from "@emotion/core";
import Layout from "../components/layout";
import ReadLink from "../components/readLink";

const PostTemplate = () => (
  <Layout>
    <h1>Post title</h1>
    <p
      css={css`
        font-size: 0.75rem;
      `}
    >
      Posted by (author)
    </p>
    <ReadLink to="/">&larr; back to all posts</ReadLink>
  </Layout>
);

export default PostTemplate;
