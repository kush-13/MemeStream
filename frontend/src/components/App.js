import React from "react";

import Navbar from "./Navbar";
import FormBody from "./FormBody";
import PostsBody from "./PostsBody";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="content">
        <PostsBody />
        <FormBody />
      </div>
    </>
  );
};

export default App;
