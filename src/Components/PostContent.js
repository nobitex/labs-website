import React, { useState, useEffect } from 'react';
import Markdown from 'react-markdown';

const PostContent = ({ id }) => {
  const [md, setMd] = useState("");

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
    <div className="post">
      <Markdown>{md}</Markdown>
    </div>
  );
};

export default PostContent;
