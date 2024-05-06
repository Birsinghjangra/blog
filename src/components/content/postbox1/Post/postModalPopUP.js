import React, { useState } from "react";
import books from "../image/books.png";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";

function PostModalPopup() {
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const Navigate = useNavigate();

  const postContent = async () => {
    try {
      const username = sessionStorage.getItem("username");

      if (!username) {
        console.error("Username not found");
        // Redirect user to login
        Navigate("/login");
        return;
      }

      if (!content.trim()) {
        console.error("Content is empty");
        return;
      }

      const response = await fetch(
        "http://localhost:3001/api/posts/postContent",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            content,
            image: image, // Using directly here
          }),
        }
      );
      if (response.ok) {
        console.log("Post created successfully");
        window.location.reload();
        // Navigate("/quora");
      } else {
        console.error("Error creating post");
      }
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div>
      <div className="container justify-content-between">
        <div className="row">
          <div className="col-12">
            <div className="text-center my-3" style={{ fontSize: "30px",fontWeight: "bold", color: "red", margin: "0px 160px 0px -350px" }}>Create Post</div>
          </div>
          <div className="col-6  justify-content-end " style={{ position: "relative", fontSize: "20px",fontWeight: "bold",  margin: "-60px -191px 31px 326px" }} >
            <div className="d-flex flex-row align-items-center">
              <div>
                <img src={books} alt="" style={{ width: "40px", height: "40px" }} />
              </div>
              <div className="p-1">{sessionStorage.getItem("username")}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12">
        <ReactQuill
          style={{ width: "700px", height: "300px" }}
          theme="snow"
          value={content}
          onChange={(value) => setContent(value)}
        />
      </div>
      <div className="d-flex justify-content-end mt-5">
        <button type="button" className="btn btn-primary" onClick={postContent}>
          Add Post
        </button>
      </div>
    </div>
  );
}

export default PostModalPopup;
