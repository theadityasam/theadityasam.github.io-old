import React from "react";

import Layout from "../components/layouts/home-layout";
import SEO from "../components/seo";

import image from "../data/clips/error.png";

const NotFoundPage: React.FC = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1 align="center">404: Not Found</h1>
    <h2 align="center">You just hit a route that doesn't exist.</h2>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "45vh",
      }}
    >
      <img
        className="image"
        src={image}
        alt="404 Error"
        width="400"
        height="300"
      />
    </div>
  </Layout>
);

export default NotFoundPage;
