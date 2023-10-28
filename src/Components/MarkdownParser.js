import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../App.css";
import Layout from "../Components/Layout";

const MarkdownParser = () => {
  const [content, setContent] = useState("");
  const { id } = useParams();

  useEffect(() => {
    import(`../content/${id}.html`).then((module) => {
      setContent(module.default);
    });
  }, [id]);

  useEffect(() => {
    if (window.MathJax) {
      window.MathJax.Hub.Typeset();
    }
  }, [content]);

  return (
    <Layout>
      <div>
        <div className="post" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </Layout>
  );
};

export default MarkdownParser;
