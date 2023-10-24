import React, { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";
import { useParams } from "react-router-dom";
import "../App.css";
import Layout from "../Components/Layout";

const MarkdownParser = () => {
  const [md, setMd] = useState("");
  const { id } = useParams();

  useEffect(() => {
    import(`../markdown/${id}.md`).then((module) =>
      fetch(module.default)
        .then((res) => res.text())
        .then((md) => {
          setMd(md);
        })
    );
  }, [id]);


  return (
    <Layout>
      <div>
        <Markdown className="post"  children={md} />
      </div>
    </Layout>
  );
};

export default MarkdownParser;
