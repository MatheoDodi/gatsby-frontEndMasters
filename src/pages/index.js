import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import usePosts from "../hooks/use-posts";

export default () => {
  const res = usePosts();

  console.log(res);
  return (
    <Layout>
      <h1>Home</h1>
      <p>Hello Gatsby</p>
      <Link to="/about">About</Link>
    </Layout>
  );
};
