import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import usePosts from "../hooks/use-posts";
import PostPreview from "../components/postPreview";
import Hero from "../components/hero";

export default () => {
  const posts = usePosts();

  return (
    <>
      <Hero />
      <Layout>
        <Link to="/about">About</Link>

        <h2>Read my Blog</h2>
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </Layout>
    </>
  );
};
