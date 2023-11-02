import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LuLoader } from "react-icons/lu";
import Dashboardcard from "./Dashboardcard";
import { AiOutlinePlus } from "react-icons/ai";
import { BsFillPostcardFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import Graph from "../pages/charts";
import { BsGraphUpArrow } from "react-icons/bs";

function Adminx() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);

  const [posts, setPosts] = useState([]);
  const [usersCount, setUsersCount] = useState(0);

  useEffect(() => {
    const getAllPosts = async () => {
      const response = await fetch(
        "https://blog-6hj4.onrender.com/api/post/select"
      );
      const res = await response.json();
      setPosts(res.data);
    };

    const getUsersCount = async () => {
      const response = await fetch(
        "https://blog-6hj4.onrender.com/api/user/selectUsers"
      );
      const data = await response.json();
      setUsersCount(data.length); // Assuming the API response is an array
    };

    getAllPosts();
    getUsersCount();
  }, []);

  return (
    <div>
      <div className="page_admin">
        <button className="Addblog">
          <Link to="/AdminDashboard">
            <i>
              <p>
                Add Blogs
                <i className="">
                  <AiOutlinePlus />
                </i>
              </p>
            </i>
          </Link>
        </button>
        <button className="graph_btn">
          <Link to="/charts">
            <strong>Statistics</strong>
          </Link>
        </button>
      </div>
      <div className="statistics">
        <div className="posts_nbr">
          <p className="post_icon">
            <i className="icon_post">
              <h3>Posts</h3>
              {/* <BsFillPostcardFill />{" "} */}
            </i>

            {posts.length}
          </p>
        </div>
        {/* <div className="users_nbr">
          <h2>
            <FaUsers /> {usersCount}
          </h2>
        </div> */}
        {/* <div className="users_nbr">
          <Link to="/charts">Graph</Link>
        </div> */}
        {/* <p className="users_nbr">
          <Link to="/charts"></Link>
          <BsGraphUpArrow />
        </p> */}
      </div>

      <section className="grid_container">
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <Dashboardcard
              id={post._id}
              key={index}
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
      </section>
    </div>
  );
}

export default Adminx;
