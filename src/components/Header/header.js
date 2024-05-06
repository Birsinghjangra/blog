import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "react-responsive-modal/styles.css";
import Modal from "react-responsive-modal";
import "@fortawesome/fontawesome-free/css/all.min.css";

import PostModalPopup from "../content/postbox1/Post/postModalPopUP";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <>
      <div className="position-fixed z-3 mt-0" style={{ width: "100%", boxShadow: "rgba(0, 30, 43, 0.1) 0px 4px 4px 0px" }}>
        <nav className="navbar navbar-expand-lg navbar-light bg-white ">
          <div className="container-fluid">
            <Link
              to="/"
              className="navbar-brand text-danger"
              style={{
                fontWeight: "bold",
                fontSize: "25px",
                marginLeft: "180px",
              }}
            >
              BlogSite
            </Link>

            <ul className="navbar-nav ml-auto">
              <form className="d-flex" role="search" >
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search post"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-light search-Button"
                  type="submit"
                  style={{ color: "black" }}
                >
                  Search
                </button>
              </form>
              <li className="nav-item">
                <button
                  onClick={openModal}
                  className="post_btnAnswer btn btn-primary mt-2"
                >
                  Post
                </button>
                <Modal open={isModalOpen} onClose={closeModal} center>
                  {/* <AllpopModal/> */}
                  <PostModalPopup />
                </Modal>
              </li>
              {isLoggedIn ? (
                <li className="nav-item">
                  <button
                    type="button"
                    className="nav-link btn btn-danger active mt-2"
                    aria-current="page"
                    onClick={handleLogout}
                  >
                    Login
                  </button>
                </li>
              ) : (
                <li className="nav-item">
                  <Link
                    to="/login"
                    style={{ color: "white", marginLeft: "10px" }}
                    className="nav-link btn btn-danger active mt-1"
                    aria-current="page"
                  >
                    Logout
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
