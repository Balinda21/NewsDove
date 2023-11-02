import React, { useState } from "react";
import { Await, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Admin() {
  // const navigate = useNavigate();
  // const [post, setPost] = useState({
  //   blogImage: "",
  //   title: "",
  //   content: "",
  // });
  // const handleInput = (event) => {
  //   if (event.target.name === "blogImage") {
  //     setPost({ ...post, blogImage: event.target.files[0] });
  //   } else {
  //     setPost({ ...post, [event.target.name]: event.target.value });
  //   }
  // };

  // function handleSubmit() {
  // event.preventDefault();

  // const formData = new FormData();
  // formData.append("blogImage", post.blogImage);
  // formData.append("title", post.title);
  // formData.append("content", post.content);

  // const apiKey =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MzBlMjU5MzFkOWUzZmZmOTkwMzkwMyIsImlhdCI6MTY5ODA2NzUxNywiZXhwIjoxNjk4MTUzOTE3fQ.TIrE8a7NC_xVKHD6iA81MI-07dXa_JIaHoiO7MR4Z0k";
  // axios
  //   .post("https://blog-6hj4.onrender.com/api/post/create", formData, {
  //     headers: {
  //       Authorization: `Bearer ${apiKey}`,
  //       "Content-Type": "multipart/form-data",
  //     },
  //   })

  //   .then((response) => {
  //     console.log(response);
  //     alert("Post created succesfully");
  //   })

  //   .catch((error) => {
  //     console.error(error);
  //     alert("Failed to create post");
  //   });

  const [postImage, setBlogImage] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  console.log("image", postImage);
  console.log("title", title);
  console.log("content", content);
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  // const addBlog = async (e) => {
  //   e.preventDefault();

  //   console.log("clicked");
  //   const inputImage = document.getElementById("inputImage");
  //   const blogImage = inputImage.files[0];

  //   const formData = new formData();
  //   formData.append("blogImage", blogImage);
  //   formData.append("title", title);
  //   formData.append("content", content);
  //   try {
  //     const Createblog = await axios.post(
  //       "https://blog-6hj4.onrender.com/api/post/create",
  //       formData,
  //       config
  //     );
  //     if (Createblog.status === 200) {
  //       alert("data added");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     alert("error added");
  //   }
  // };

  // const [title, setTitle] = useState("");
  // const [blogImage, setIfoto] = useState("");
  // const [content, setContent] = useState("");

  // console.log(blogImage);

  // const token = localStorage.getItem("userToken");

  // console.log("Token =", token);

  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // };

  const createBlog = async (e) => {
    e.preventDefault();

    // Assuming you have the file input element with the ID "imageInput" in your HTML
    const imageInput = document.getElementById("imageInput");
    const postImage = imageInput.files[0]; // Get the selected image file

    // Create a new FormData object
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("postImage", postImage);
    // console.log("form data", formData);
    try {
      const make = await axios.post(
        "https://blog-6hj4.onrender.com/api/post/create",
        formData,
        config
      );

      console.log(make);
      if (make.status === 201) {
        alert(make.data.message);
      }
      window.location.reload();
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  return (
    <div className="dashy">
      <div className="container-dash">
        <span className="dashy">Upload a blog</span>
        <form className="formy">
          <input
            className="picture_2"
            type="file"
            accept="image/*"
            id="imageInput"
            value={postImage}
            onChange={(e) => setBlogImage(e.target.value)}
          ></input>
          <textarea
            className="area"
            name="title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></textarea>
          <textarea
            className="area"
            name="content"
            placeholder="Enter blog content here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <button className="publish" value="publish" onClick={createBlog}>
            Add{" "}
          </button>
        </form>
      </div>
    </div>
  );
}
export default Admin;
