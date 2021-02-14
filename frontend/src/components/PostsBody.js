import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "./Post";

const PostsBody = () => {
  const [posts, setPosts] = useState([]);
  // fetching posts
  useEffect(() => {
    const getPosts = async () => {
      try {
        const { data } = await axios.get(
          "https://heaby-driver.herokuapp.com/memes"
        );
        setPosts(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getPosts();
  }, []);

  console.log(posts);

  return (
    <div className="content__postsBody">
      {!posts.length ? (
        <p>No posts yet</p>
      ) : (
        posts.map((post, index) => (
          <Post
            key={post.id}
            url={post.url}
            author={post.name}
            message={post.caption}
          />
        ))
      )}
    </div>
  );
};

export default PostsBody;
