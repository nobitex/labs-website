import React from "react";
import { HashRouter as Router, Routes, Route} from "react-router-dom";
import MarkdownParser from "./Components/MarkdownParser";
import Home from "./pages/Home";
import AllPosts from "./pages/AllPosts";
import Category from "./pages/category";

const App = () => {
  const markdownFiles = require.context("./markdown", true, /\.md$/);
  const postIds = markdownFiles
    .keys()
    .map((filename) => filename.replace("./", "").replace(".md", ""));

  return (
    <>
      <Router basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
          {postIds.map((id) => (
            <Route
              key={id}
              path={`posts/:id`}
              element={<MarkdownParser path={`markdown/markdown${id}.md`} />}
            />
          ))}
          <Route path="/posts" element={<AllPosts />} />
          <Route path="/categories" element={<Category />} />
          <Route path="/categories/:categoryName" element={<Category />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
