import React from "react";
import styled from "@emotion/styled";
import { Link, graphql, useStaticQuery } from "gatsby";

const Hero = () => {
  return (
    <div>
      <h1>Frontend Masters + Gatsby &hearts;</h1>
      <p>
        Hello Gatsby <Link to="/about/">Learn more about me &rarr;</Link>
      </p>
    </div>
  );
};

export default Hero;
