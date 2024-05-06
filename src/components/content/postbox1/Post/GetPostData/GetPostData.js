import React, { useState, useEffect } from "react";

function GetPostData() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch all posts from the server
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "http://localhost:3001/api/posts/GetAllPosts"
        );
        if (response.ok) {
          const data = await response.json();
          setPosts(data);
        } else {
          console.error("Error fetching posts:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    // Call the fetchPosts function
    fetchPosts();
  }, []);

  const formatDateTime = (dateTimeString) => {
    const postDate = new Date(dateTimeString);
    const now = new Date();
    const timeDifference = now - postDate;
    const hoursDifference = timeDifference / (1000 * 60 * 60);

    if (hoursDifference < 24) {
      return postDate.toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      });
    } else if (hoursDifference < 48) {
      return "Yesterday";
    } else {
      return postDate.toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      });
    }
  };

  const toggleExpanded = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post._id === postId ? { ...post, expanded: !post.expanded } : post
      )
    );
  };

  return (
    <div className="row">
      {posts.map((post) => (
        <div key={post._id} className="col-md-6 mt-4">
          <div className={`card ${post._id}`}>
            <div className="card-body">
              <div className="d-flex flex-column">
                <div className="text-right">
                  <div className="container text-left">
                    <div className="row">
                      <div className="col-md-auto text-justify">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: post.expanded
                              ? post.content
                              : post.content.slice(0, 400) + "..."
                          }}
                        />
                        {post.content.length > 300 && (
                          <a
                            href="#"
                            onClick={() => toggleExpanded(post._id)}
                          >
                            {post.expanded ? "Read Less" : "Read More"}
                          </a>
                        )}
                      </div>
                      <div className="d-flex justify-content-between">
                        <div className="text-danger">
                          Posted by: {post.username}
                        </div>
                        <div className="text-danger">
                          Posted at: {formatDateTime(post.createdAt)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GetPostData;
