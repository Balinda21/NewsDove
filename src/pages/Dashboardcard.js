import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function notification() {
  const notify = () => toast("Wow so easy!");
}

const Dashboardcard = ({ id, postImage, title, content, subheader }) => {
  const [isEditing, setEditing] = useState(false);
  const [editedImage, setEditedImage] = useState(postImage);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedContent, setEditedContent] = useState(content);
  const [imageFile, setImageFile] = useState(null);

  function handleImageChange(e) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setEditedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
      setImageFile(file);
    }
  }

  function handleEditClick() {
    setEditing(true);
  }

  function handleSaveClick() {
    const formData = new FormData();
    formData.append("id", id);
    formData.append("title", editedTitle);
    formData.append("content", editedContent);
    if (imageFile) {
      formData.append("postImage", imageFile); // Use "postImage" as the field name
    }

    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios
      .put(`https://blog-6hj4.onrender.com/api/post/update/${id}`, formData, {
        headers: {
          ...headers,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          alert("Data updated successfully");
          setEditing(false);
        } else {
          alert("Failed to update data");
        }
      })
      .catch((error) => {
        console.error("Error updating data:", error);
        alert("Failed to update data");
      });
  }

  function deleteRecord(e) {
    e.preventDefault();
    const token = localStorage.getItem("token");

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const Data = {
      id: id,
    };

    axios
      .delete(`https://blog-6hj4.onrender.com/api/post/delete/${id}`, {
        headers: headers,
        data: Data,
      })
      .then((response) => {
        if (response.status === 200) {
          alert("Data deleted successfully");
        } else {
          alert("Failed to delete data");
        }
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
        alert("Failed to delete data");
      });
  }

  return (
    <div>
      <div className="card-img-holder">
        {isEditing ? (
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="edit-input"
          />
        ) : (
          <img src={editedImage} alt="Blog image" />
        )}
      </div>
      <h3 className="blog-title">
        {isEditing ? (
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className="edit-input"
          />
        ) : (
          editedTitle
        )}
      </h3>
      <span className="blog-time">{subheader}</span>

      {isEditing ? (
        <div className="edit-form">
          <textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            className="edit-textarea"
          />
          <button className="btn" onClick={handleSaveClick}>
            Save
          </button>
        </div>
      ) : (
        <p className="description">{content}</p>
      )}

      <div className="options">
        {!isEditing && (
          <li className="btn" onClick={handleEditClick}>
            Edit
          </li>
        )}
        <li className="btn" onClick={deleteRecord}>
          Delete
        </li>
      </div>
    </div>
  );
};

export default Dashboardcard;
