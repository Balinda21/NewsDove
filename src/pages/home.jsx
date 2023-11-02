import React, { useEffect, useState } from "react";
import { Card } from "../component/Card";
import { LuLoader } from "react-icons/lu";
import Welcome from "./welcome";

export const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getAll = async () => {
      const response = await fetch(
        "https://blog-6hj4.onrender.com/api/post/select"
      );
      const res = await response.json();
      setPosts(res.data);
    };
    getAll();
  }, []);

  console.log("THIS MY POSTS", posts);
  return (
    <div>
      <section className="welcome-page">
        <Welcome />
      </section>

      <div className="grid_container">
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <Card
              key={index}
              id={post._id}
              title={post.title}
              postImage={post.postImage}
              subheader={post.subheader}
              content={post.content}
            />
          ))
        ) : (
          <p>
            <LuLoader />
          </p>
        )}
      </div>
    </div>
  );
};
export default Home;
